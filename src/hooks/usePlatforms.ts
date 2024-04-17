import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient("/platforms/lists/parents");
//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 * 60 * 60 * 1000, //24 hours
    initialData: platform,
  });

export default usePlatforms;
