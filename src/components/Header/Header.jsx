// import react modul
import React from "react";
// import scoped cms - se ScopedCSS.md
import Styles from "./Header.module.scss";
//import './Header.scss';

// Eksporterer function til brug i andre filer
export default function Header(props) {
    // Styles hentes med objekt.selectorname
    return (
        <header className={Styles.mainHeader}>
            {props.children}
        </header>
    )
}