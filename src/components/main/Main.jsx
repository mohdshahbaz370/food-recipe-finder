import React from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import pancakePic from "../../assets/images/pexels-ash-craig-122861-376464.jpg";
import burgerPic from "../../assets/images/pexels-robinstickel-70497.jpg";

const Main = () => {
  return (
    <main>
      <section className={styles.about}>
        <section className={styles.col1}>
          <img src={pancakePic} alt="pancake pic" className={styles.aboutImg} />
        </section>
        <section className={styles.col2}>
          <h2>About</h2>
          <p>
            Search for any dish you desire from across the world and learn about
            its secret ingredients. We produce food recipes utilising a highly
            strong API behind the scenes.
          </p>
        </section>
      </section>
      <hr className={styles.hr} />
      <section className={styles.howToGetStarted}>
        <section className={styles.col2}>
          <h2>How to to get Started?</h2>
          <p>
            To begin looking for the delicious recipe you wish to try, just
            click the <q>get started</q> button.
          </p>
          <Link to="/search" className={styles.link}>
            <button className={styles.btn}>Get Started</button>
          </Link>
        </section>
        <section className={styles.col1}>
          <img src={burgerPic} alt="burger pic" className={styles.aboutImg} />
        </section>
      </section>
    </main>
  );
};

export default Main;
