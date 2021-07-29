import { Logo } from "./logo.js";
import { NavLinks } from "./navLinks.js";
import { Hamburger } from "./hamburger.js";


export const NavigationBar = (data) =>{
    const markup = document.createElement('div');
    markup.classList.add('navigation');

    markup.appendChild(Logo(data.logo));
    markup.appendChild(Hamburger(data.hamburger));
    markup.appendChild(NavLinks(data.navLinks));

    return markup;
    
}