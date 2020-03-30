import React from 'react';
// Hent forskellige componenter
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

// Code Splitting
const Jokes = React.lazy(() => import("../Pages/Jokes/Jokes"));
const Corona = React.lazy(() => import("../Pages/Corona/Corona"));

// Deklarer array til routes
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
    name: "Corona",
    path: "/corona",
    exact: true,
    component: Corona
},
{
    name: "Jokes",
    path: "/jokes",
    exact: true,
    component: Jokes
},
{
    name: "Contact",
    path: "/contact",
    exact: true,
    component: Contact
}]

export default routes;