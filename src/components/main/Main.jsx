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
          <h1>About</h1>
          <p>
            Search for any food you want from around the globe and know its
            secret ingredients. We are using a very powerful API behind the
            scenes to generate food recipes
          </p>
        </section>
      </section>
      <hr className={styles.hr} />
      <section className={styles.howToGetStarted}>
        <section className={styles.col2}>
          <h1>How to to get Started?</h1>
          <p>
            Please click <q>get started</q> button to start searching for your
            tasty food recipe that you want to try.
          </p>
          <button className={styles.btn}>
            <Link to="/search" className={styles.link}>
              Get Started
            </Link>
          </button>
        </section>
        <section className={styles.col1}>
          <img src={burgerPic} alt="burger pic" className={styles.aboutImg} />
        </section>
      </section>
    </main>
  );
};

export default Main;
