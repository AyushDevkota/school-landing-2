import React from "react";
import styles from "./Header.module.css";
import { Navbar, Infobar, PrimaryBtn } from "../../../../components";

const index = () => {
  return (
    <header className={styles["header"]}>
      <Infobar />
      <main className={styles["main"]}>
        <div className={styles.overlay}></div>
        <Navbar
          style={{ color: "#FFFFFF", position: "relative", bottom: "98%" }}
        />
        <div className={styles.info}>
          <p className={`${styles.info__heading} fw-bold`}>
            Congratulations, graduates!
          </p>
          <p className={`${styles.info__text} fw-light`}>
            Bucknell marked a historic Commencement weekend on May 21 and 22,
            2022, celebrating Commencement for the Class of 2020 and Class of
            2022. Relive the events in photos, videos, speeches and more
          </p>
          <PrimaryBtn text="Start Tour" />
        </div>
      </main>
    </header>
  );
};

export default index;
