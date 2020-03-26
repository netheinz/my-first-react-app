import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Home
    },
    {
        name: "About",
        path: "/about",
        exact: true,
        component: About
    },
    {
        name: "Contact",
        path: "/contact",
        exact: true,
        component: Contact
    }]

export default function Router(props) {
    return (
      <Switch>
        {/*
                <Route path="/" exact={true} render={() => <h1>Velkommen</h1>} />
                <Route path="/about" render={() => <h1>Om os</h1>} />
                <Route path="/contact" render={() => <h1>Kontakt os</h1>} />
            */}
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route render={() => <h1>Siden findes ikke</h1>} />
      </Switch>
    );
}