



export const Hamburger = (props) => {
    let isOpen = false;

    const openMenu = () =>{

        isOpen = !isOpen;
        let navContainer = document.querySelector(".nav-container");

        if (isOpen) {
        
            icon.src = props.closeSrc;
            navContainer.classList.add("open-nav");
        } 
        else {
        icon.src = props.imageSrc;
        navContainer.classList.remove("open-nav");
        }

    }


    let menu = document.createElement('div');
    menu.classList.add('hamburger-menu');
    menu.addEventListener('click', openMenu);
    let icon = document.createElement('img');
    icon.src = props.imageSrc;
    menu.appendChild(icon)
    return menu;
}