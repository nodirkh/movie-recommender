import React from "react";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <React.Fragment>
      <header className={styles.navbar_module}>
        <div className={styles.navbar_container}>
          <h1 className={styles.navbar_title}>Movie Recommender</h1>
          <nav className={styles.navbar}>
            <ul className={styles.navbar_items}>
              <li className={styles.navbar_item}>
                <a href="google.com">Search by interests</a>
              </li>
              <li className={styles.navbar_item}>
                <a href="google.com">Search by genre</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
