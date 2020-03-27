// import react modul med mulighed for hooks
import React, { useState, useEffect, useRef } from "react";
// import Style Module
import Style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../Router/routes";

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('click', listener);
      return () => {
        document.removeEventListener('click', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

// Li Component
const Li = props => {
  // Destructure property objektet
  const { name, exact, path, handleClose } = props;

  return (
    <li onClick={handleClose}>
      {/* NavLink bruges med fordele til referencer i menuen */}
      <NavLink to={path} exact={exact}>
        {name}
      </NavLink>
    </li>
  );
}

const Nav = props => {
  // Definerer hook array til default false
  const [open, setOpen] = useState(false);
  // Nav renderes - når vi skal bruge dom elementer
  const navRef = useRef();

  // Definerer funktion til at håndtere visning af menu
  const handleOpen = e => {
    setOpen(!open);
  };

  // Definerer funktion til at håndtere visning af menu
  const handleClose = e => {
    setOpen(false);
  }
  
  useOnClickOutside(navRef, handleClose);

  //Returnerer knap med click event og betingelse for visning
  return (
    <nav ref={navRef}>
      <button onClick={handleOpen}>Åben/Luk nav</button>
      {/* Short circuit: open && () */}
      {open && (
        <ul>
          {/* Loop routes array */}
          {routes.map((navelement, i) => {
            return (
              <Li key={navelement.name} 
                  // Spread deler objekt op i seperate props og værdier 
                  {...navelement} 
                  handleClose={handleClose}
              />
            )
          })}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
