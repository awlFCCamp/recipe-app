import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h5 className={styles.title}>Hit us up on our socials!</h5>
        <div className={styles.socials}>
          <div className={styles.socialIcon}>
            <a
              href="https://www.devmountain.com"
              target="_blank"
              rel="noreferrer"
            >
              <ImFacebook size="1.5em" color="#3f3f3f" />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.devmountain.com"
              target="_blank"
              rel="noreferrer"
            >
              <ImInstagram size="1.5em" color="#3f3f3f" />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.devmountain.com"
              target="_blank"
              rel="noreferrer"
            >
              <ImTwitter size="1.5em" color="#3f3f3f" />
            </a>
          </div>
          <div className={styles.socialIcon}>
            <a
              href="https://www.devmountain.com"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub size="1.5em" color="#3f3f3f" />
            </a>
          </div>
        </div>
      </div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.devIcon}
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" stroke-width="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;
