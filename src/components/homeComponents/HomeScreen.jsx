import { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "../recipeCard/RecipeCard";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const URL = "https://recipes.devmountain.com/recipes";
  const getRecipes = async () => {
    try {
      const data = await axios.get(URL);
      setRecipes(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });
  return (
    <div>
      <AdBanner />
      <section className={styles.section}>
        <span className={styles.container}>
          <BiSearchAlt2
            size="2em"
            color="#DA7635"
            className={styles.searchIcon}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
            className={styles.searchInput}
          />
        </span>
        <div className={styles.gridContainer}>
          <div className={styles.cards}>
            {" "}
            {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
