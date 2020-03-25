// import react modul
import React from "react";
// import scss stylesheet - REACT kompilerer dette i load
import Style from "./Main.scss";

// Eksporterer function til brug i andre filer
export default function Main(props) {
    // Returner main tag med mulighed for children
    return (
      <main>
        <h1>Main Component</h1>
        <div class="container"></div>
        {props.children}
      </main>
    );
  }