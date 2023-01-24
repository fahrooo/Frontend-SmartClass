import { Link, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ totalSec, email }) => {
  const countRef = useRef("");
  const [restart, setRestart] = useState(true);
  const [timee, setTime] = useState(Date.now() + totalSec);

  const toast = useToast();

  // console.log(countRef);
  const resendVerificationCode = (e, apiii) => {
    e.preventDefault();
    setTime(Date.now() + totalSec);
    // apiii.start();
    try {
      axios
        .post("http://localhost:5000/sendverifyemail", {
          email,
        })
        .then((res) => {
          if (
            res.data.status === 200 &&
            res.data.message === "Email sent successfully"
          ) {
            toast({
              title: "Kirim Ulang Berhasil!",
              description: "Silahkan cek kembali email anda",
              status: "success",
              duration: 5000,
              position: "top",
              isClosable: true,
            });
          } else {
            toast({
              title: "Kirim Ulang Gagal!",
              description: "Silahkan lakukan kembali",
              status: "error",
              duration: 5000,
              position: "top",
              isClosable: true,
            });
          }
        });
    } catch (error) {
      toast({
        title: "Gagal",
        description: error.message,
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const renderer = ({ seconds, completed, api }) => {
    if (completed) {
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
