export type TMovie = {
  id: string;
  title: string;
  poster: string;
  date: string;
  overview: string;
};

export type TMovieCard = {
  id: string;
  title: string;
  plot: string;
  poster: string;
  year: string;
  languages: TInformation[];
  genres: TInformation[];
  countries: TInformation[];
  companies: TInformation[];
  budget: string;
  runtime: string;
  rating: string;
};

export type TPerson = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type TInformation = {
  id: string;
  name: string;
};

export type TIconSize = "xl" | "sm" | "lg" | "xs";

export type TIconType = "star" | "signIn";

export type TFetchingState = "init" | "loading" | "success" | "failure";
