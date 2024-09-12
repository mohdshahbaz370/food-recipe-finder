import styles from "./header.module.css";
import vegPic from "../../assets/images/pexels-adonyi-foto-1414651.jpg";
const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.center}>Food Recipe Finder</p>
      {/* <h3>Search for any type of food that you would like to cook.</h3> */}
      <img src={vegPic} alt="veg pic" className={styles.img} />
    </header>
  );
};

export default Header;