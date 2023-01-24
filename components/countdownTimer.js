import { Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ totalSec }) => {
  const countRef = useRef("");
  const [restart, setRestart] = useState(true);
  const [timee, setTime] = useState(Date.now() + totalSec);

  // console.log(countRef);
  const resendVerificationCode = (e, apiii) => {
    e.preventDefault();
    setTime(Date.now() + totalSec);
    // apiii.start();
  };

  const renderer = ({ seconds, completed, api }) => {
    if (completed) {
      console.log(api);
      return (
        <Link color="#FF9567" onClick={(e) => resendVerificationCode(e, api)}>
          Kirim Ulang
        </Link>
      );
    } else {
      return <span>{seconds > 9 ? seconds : `0${seconds}`}</span>;
    }
  };

  useEffect(() => {
    if (restart) {
      countRef?.current?.start();
    }
  }, [restart, timee]);

  return (
    <Countdown
      date={timee}
      renderer={renderer}
      autoStart={false}
      ref={countRef}
    ></Countdown>
  );
};

export default CountdownTimer;
