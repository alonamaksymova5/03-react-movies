import axios from "axios";
import { Movie } from "../types/movie";

export async function fetchMovies(movieQuery: string): Promise<Movie[]> {
  const url = "https://api.themoviedb.org/3/search/movie";

  const response = await axios.get(url, {
    params: {
      query: movieQuery,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer твійТокен`,
    },
  });

  return response.data.results;
}
