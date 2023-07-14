import { mapMoviePersons } from "./map-movie-persons";
import { TMoviePersons } from "./types";

type TMoviePersonsSuccess = {
  type: "success";
  data: TMoviePersons;
};

type TMoviePersonsError = {
  type: "error";
  error: any;
};

type TMoviePersonsResponse = TMoviePersonsSuccess | TMoviePersonsError;

export const getMoviePersons = async (
  movieId: string
): Promise<TMoviePersonsResponse> => {
  try {
    const baseUrl = "https://api.moviesdb.ru";
    const moviePersonsRes = await fetch(
      `${baseUrl}/3/movie/${movieId}/credits?language=en-US`,
      {
        method: "GET",
        headers: { accept: "application/json" },
      }
    );

    const moviePersons = await moviePersonsRes.json();

    const data = mapMoviePersons(moviePersons);

    return { type: "success", data };
  } catch (error) {
    return { type: "error", error };
  }
};
