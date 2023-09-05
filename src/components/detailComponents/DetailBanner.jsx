import styles from "./DetailBanner.module.css";

const DetailBanner = ({ image, title }) => {
  const backgroundString = `--background: url(${image})`;
  return (
    <div
      // className={moreStyles.ad_banner}
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
      // style={{backgroundString}}
    >
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default DetailBanner;
