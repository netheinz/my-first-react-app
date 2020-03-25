// import react modul med mulighed for hooks
import React, { useState } from "react";
// import Style Module
import Style from "./Nav.module.scss";

// Sætter array med menupunkter
const navArray = [
    { name: "Forside" },
    { name: "About" },
    { name: "Kontakt" },
    { name: "Partnere" }
  ]

const Nav = props => {
    // Definerer hook array til default false
    const [open, setOpen] = useState(false);
    
    // Definerer funktion til at håndtere visning af menu
    const handleOpen = e => {
        setOpen(!open);
    }
    
    //Returnerer knap med click event og betingelse for visning
    return (
      <nav>
        <button onClick={handleOpen}>
            Åben/Luk nav
        </button>
        {/* Short circuit: open && () */}
        {open &&  (
            <ul>
            {
              navArray.map((navelement, i) => {
                return (
                <li key={navelement.name}><a href="#"> {i}. {navelement.name} </a></li>
                )
              })
            }
            </ul>
        )}
      </nav>
    );
  }

  export default Nav;