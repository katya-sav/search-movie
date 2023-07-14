import React from "react";

import { InformationLinkList } from "../InformationLinkList";
import { InformationTextList } from "../InformationTextList";
import { TInformation } from "../../../types";
import styles from "./Information.module.css";

type TInformationProps = {
  items: TInformation[];
  title: string;
  withLink?: boolean;
  linkName?: string;
};

export const Information = ({
  items,
  title,
  withLink,
  linkName,
}: TInformationProps) => {
  const ListComponent =
    withLink && linkName ? InformationLinkList : InformationTextList;

  return (
    <div className={styles.list}>
      <div className={styles.title}>{title}</div>
      <ListComponent items={items} linkName={linkName} />
    </div>
  );
};
