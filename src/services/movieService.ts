import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(movieQuery: string): Promise<Movie[]> {
  const url = "https://api.themoviedb.org/3/search/movie";

  const response = await axios.get<MovieResponse>(url, {
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
