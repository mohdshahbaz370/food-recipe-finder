import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles?.footer}>
      Any issue or help? Contact:{" "}
      <a href="mailto:mohdshahbaz027@gmail.com" className={styles.link}>
        mohdshahbaz027@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
