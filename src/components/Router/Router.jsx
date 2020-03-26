import React from "react";

import { Switch, Route } from 'react-router-dom';

export default function Router(props) {
    return (
        <Switch>
            <Route path="/" render={() => <h1>Velkommen</h1>} />
            <Route path="/about" render={() => <h1>Om os</h1>} />
            <Route path="/contact" render={() => <h1>Kontakt os</h1>} />
        </Switch>
    )
}