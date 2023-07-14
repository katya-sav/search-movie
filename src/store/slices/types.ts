import { TMovie, TFetchingState, TMovieCard, TPerson } from "../../types";

export type TMoviesSliceState = {
  movies: TMovie[];
  error: any;
  state: TFetchingState;
};

export type TMovieCardSlice = {
  movieCards: { [id: string]: TMovieCard | null };
  error: any;
  state: TFetchingState;
};

export type TMoviePersonsSlice = {
  movieCast: TPerson[];
  movieCrew: TPerson[];
  error: any;
  state: TFetchingState;
};
