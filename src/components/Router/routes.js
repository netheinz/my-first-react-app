// Hent forskellige componenter
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

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
    name: "Contact",
    path: "/contact",
    exact: true,
    component: Contact
}]

export default routes;