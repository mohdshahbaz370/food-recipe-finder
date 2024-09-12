import React, { useState, useEffect } from "react";
import Recipe from "../recipe/Recipe";
import styles from "./search.module.css";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [size, setSize] = useState(5);

  useEffect(() => {
    getRecipes("biryani");
  }, []);

  useEffect(() => {
    setSize(5);
  }, [recipes]);

  const getRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        import.meta.env.VITE_APP_ID
      }&app_key=${import.meta.env.VITE_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const debounce = (getRecipes, ms) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(getRecipes, ms, ...args);
    };
  };

  const getRecipesDebounced = debounce(getRecipes, 500);
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.heading}>Food Recipe Finder</h1>
        <input
          type="text"
          placeholder="Search here for food recipes..."
          className={styles.searchField}
          onKeyUp={(e) => getRecipesDebounced(e.target.value)}
        />
        <section>
          {!recipes?.length ? (
            <p>Oops! no data available</p>
          ) : (
            recipes
              .slice(0, size)
              .map((recipe) => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                />
              ))
          )}
        </section>
        {size < recipes?.length && (
          <button className={styles.btn} onClick={() => setSize(size + 5)}>
            Load More
          </button>
        )}
      </main>
    </>
  );
};

export default Search;
