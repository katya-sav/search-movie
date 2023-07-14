import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { TIconType, TIconSize } from "../../types";

type TIconProps = {
  size: TIconSize;
  icon: TIconType;
  className: string;
};

export const Icon = ({ icon, size, className }: TIconProps) => {
  const renderedIcon = useMemo(() => {
    switch (icon) {
      case "star":
        return faStar;

      case "signIn":
        return faRightToBracket;

      default:
        return null;
    }
  }, []);

  if (!renderedIcon) {
    return null;
  }

  return (
    <FontAwesomeIcon className={className} icon={renderedIcon} size={size} />
  );
};
