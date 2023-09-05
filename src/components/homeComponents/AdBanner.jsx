import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import styles from "./AdBanner.module.css";

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.adBanner}>
        <h3 className={styles.subTitle}>New Recipe</h3>
        <h1 className={styles.title}>Pineapple Salmon</h1>
        <h3 className={styles.text}>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className={styles.blueBtn}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
