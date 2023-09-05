import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Devmountain Eatery</h2>
      <nav className={styles.btns}>
        <Link to="">
          <button className={styles.link}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={styles.link}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
