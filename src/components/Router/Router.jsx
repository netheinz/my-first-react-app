import React from "react";
// Henter de værktøj som vi skal bruge i forb med vores router
import { Switch, Route } from 'react-router-dom';
// Henter routes array
import routes from './routes';

export default function Router(props) {
    return (
      <Switch>
        {/*
            Eksempel på analog route
            <Route path="/contact" render={() => <h1>Kontakt os</h1>} />

            Herunder mappes array routes og udskrives a la ovenstående.
        
        */}
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {/* Route til 404 Not found */}
        <Route render={() => <h1>Siden findes ikke</h1>} />
      </Switch>
    );
}