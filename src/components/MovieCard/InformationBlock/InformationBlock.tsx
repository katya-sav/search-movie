import React from "react";

import { Information } from "../Information";
import { TMovieCard } from "../../../types";

type TInformationBlockProps = {
  movieCard: TMovieCard;
};

export const InformationBlock = ({ movieCard }: TInformationBlockProps) => {
  return (
    <div>
      <Information title="Language:" items={movieCard.languages} />
      <Information
        withLink
        title="Genre:"
        linkName="genre"
        items={movieCard.genres}
      />
      <Information title="Country:" items={movieCard.countries} />
      <Information
        withLink
        title="Companies:"
        linkName="companies"
        items={movieCard.companies}
      />
    </div>
  );
};
