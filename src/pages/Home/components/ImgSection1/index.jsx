import React from "react";
import styles from "./ImgSection1.module.css";
import { PotraitImg } from "../../../../Assets";

const index = () => {
  return (
    <div className={styles["img-container"]}>
      <div class={styles["bg-image"]}></div>
      <div class={styles["bg-text"]}>
        <img src={PotraitImg} alt="potrait" />
        <p className={styles["bg-heading"]}>
          “We’re all at our best in our ability to learn when we’re thinking of
          each other as equal members of the community.”
        </p>
        <div>
          <p className={styles["name"]}>Elizabeth Reese</p>
          <p className={styles["designation"]}>Assistant Professor of Law</p>
        </div>
      </div>
    </div>
  );
};

export default index;
