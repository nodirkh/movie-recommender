import React from "react";
import { useState, useEffect, useCallback } from "react";
import styles from "../styles/Menu.module.css";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const [menu, setMenu] = useState([]);
    return (
        <React.Fragment>
            <div className={styles.container}>
                <ul className={styles.row}>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                </ul>
            </div>
        </React.Fragment>
    )
}