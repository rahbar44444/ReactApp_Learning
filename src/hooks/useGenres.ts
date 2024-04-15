import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiCLient = new APIClient("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => ({ data: genres, isLoading: false, error: null }); //useData<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiCLient.getAll,
    staleTime: ms("24h"), //24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });

export default useGenres;
