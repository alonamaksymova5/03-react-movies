import axios from "axios";
import type { Movie } from "../types/movie";

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
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
}
