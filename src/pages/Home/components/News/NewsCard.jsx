import React from "react";
import styles from "./News.module.css";
import { SubTitle } from "../../../../components";

const NewsCard = ({ data }) => {
  return (
    <div className={`${styles.event} flex-row`}>
      <div className={styles["event__date"]}>
        <p>{data.date.event.month}</p>
        <p className="fs-20">{data.date.event.day}</p>
      </div>
      <div>
        <p className="text-dark text-uppercase">{data.date.publish}</p>
        <SubTitle subTitle={data.title} />
        <p className="text-dark fs-13">{data.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
