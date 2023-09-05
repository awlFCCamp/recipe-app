import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailBanner from "./DetailBanner";
import axios from "axios";
import styles from "./DetailScreen.module.css";

const DetailScreen = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const URL = `https://recipes.devmountain.com/recipes/${id}`;
  const getData = async () => {
    try {
      const data = await axios.get(URL);
      setRecipe(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={styles.detailScreen}>
      <DetailBanner image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.container}>
        <div className={styles.recipe}>
          <h2 className={styles.subtitle}>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <div className={styles.line}></div>
          <h2 className={styles.subtitle}>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4 key={index}>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={styles.instruction}>
          <h2 className={styles.subtitle}>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
