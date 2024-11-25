import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <section className={styles.container}>
      <section className={styles.col1}>
        <img className={styles.img} src={image} alt="dish pic" />
      </section>
      <section className={styles.col2}>
        <h2 className={styles.heading}>{title}</h2>
        <ol>
          {ingredients?.map((ingredient) => (
            <li>{ingredient?.text}</li>
          ))}
        </ol>
        <p className={styles.para}>Calories : {calories}</p>
      </section>
    </section>
  );
};

export default Recipe;
