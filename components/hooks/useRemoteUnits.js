import { useQuery } from "@tanstack/react-query";
import { getFetchcer } from "@/libs/axios";

const useRemoteUnits = () => {
  const url = "/units";

  const { data, ...others } = useQuery(
    ["user"],
    async () => await getFetchcer(url)
  );

  return { data, ...others };
};

export default useRemoteUnits;
