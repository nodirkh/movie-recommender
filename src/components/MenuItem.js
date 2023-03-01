import React from "react";
import styles from "../styles/MenuItem.module.css";

export const MenuItem = (props) => {
  return (
    <div className = {styles.item}>
      <div className = {styles.item_description}>
        <h2 className = {styles.text_title}>Title</h2>
        <span className = {styles.text_body}>Here are the details of the item</span>
      </div>
    </div>
  );
};
