import styles from "./Recipe.module.css";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.subCard}>
        <div>
          <img src={recipe.image_url} alt="" className={styles.img} />
        </div>
        <h3 className={styles.cardText}>{recipe.recipe_name}</h3>
      </div>
      <button className={styles.cardBtn} onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
