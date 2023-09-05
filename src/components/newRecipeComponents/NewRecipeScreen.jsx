import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import styles from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const URL = "https://recipes.devmountain.com";

  const formik = useFormik({
    initialValues: {
      type: "",
      recipeName: "",
      imageURL: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [],
      instructions: "",
    },
    onSubmit: (values) => {
      values.ingredients = ingredients;
      console.log(values);
    },
  });

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Tell us about your Recipe!</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.nameImage}>
          <input
            className={styles.inputLong}
            placeholder="Name"
            value={formik.values.recipeName}
            onChange={formik.handleChange}
            name="recipeName"
          />
          <input
            className={styles.inputLong}
            placeholder="Image URL"
            value={formik.values.imageURL}
            onChange={formik.handleChange}
            name="imageURL"
          />
        </div>
        <div className={styles.radioBtns}>
          <span className={styles.radioBtn}>
            <input
              className={styles.radio}
              type="radio"
              value="Cook"
              onChange={formik.handleChange}
              name="type"
            />
            <h5>Cook</h5>
          </span>
          <span className={styles.radioBtn}>
            <input
              className={styles.radio}
              type="radio"
              value="Bake"
              onChange={formik.handleChange}
              name="type"
            />
            <h5>Bake</h5>
          </span>
          <span className={styles.radioBtn}>
            <input
              className={styles.radio}
              type="radio"
              value="Drink"
              onChange={formik.handleChange}
              name="type"
            />
            <h5>Drink</h5>
          </span>
        </div>
        <div className={styles.times}>
          <input
            className={styles.inputShort}
            placeholder="Prep Time"
            value={formik.values.prepTime}
            onChange={formik.handleChange}
            name="prepTime"
          />

          <input
            className={styles.inputShort}
            placeholder="Cook Time"
            value={formik.values.cookTime}
            onChange={formik.handleChange}
            name="cookTime"
          />
          <input
            className={styles.inputShort}
            placeholder="Serves"
            value={formik.values.serves}
            onChange={formik.handleChange}
            name="serves"
          />
        </div>

        <div className={styles.ingredientsWrapper}>
          <div className={styles.ingredients}>
            <input
              className={styles.inputLong}
              placeholder="Ingredient"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.inputLong}
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <ul>{ingredientDisplay}</ul>
        </div>
        <div className={styles.another}>
          <button
            type="button"
            onClick={addIngredient}
            className={styles.orangeBtn}
          >
            Add Another
          </button>

          <textarea
            className={styles.textarea}
            placeholder="Type your instructions"
            rows={6}
            value={formik.values.instructions}
            onChange={formik.handleChange}
            name="instructions"
          />

          <button type="submit" className={styles.blueBtn}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
