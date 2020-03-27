// import react modul med mulighed for hooks
import React, { useState } from "react";
// import Style Module
import Style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../Router/routes";

const Nav = props => {
  // Definerer hook array til default false
  const [open, setOpen] = useState(false);

  // Definerer funktion til at håndtere visning af menu
  const handleOpen = e => {
    setOpen(!open);
  };

  //Returnerer knap med click event og betingelse for visning
  return (
    <nav>
      <button onClick={handleOpen}>Åben/Luk nav</button>
      {/* Short circuit: open && () */}
      {open && (
        <ul>
          {/* Loop routes array */}
          {routes.map((navelement, i) => {
            return (
              <li key={navelement.name}>
                {/* NavLink bruges med fordele til referencer i menuen */}
                <NavLink to={navelement.path} exact={navelement.exact}>
                  {navelement.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
