import { useQuery } from "@tanstack/react-query";
import { postFetcher } from "@/libs/axios";

const useRemoteUsers = ({ limit, page }) => {
  const url = "/users";

  const { data, ...others } = useQuery(
    ["user"],
    async () =>
      await postFetcher(url, {
        limit: limit,
        page: page,
      })
  );

  return { data, ...others };
};

export default useRemoteUsers;
