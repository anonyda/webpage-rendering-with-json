/* <ul class="nav-container">
<!-- items  -->
<li class="nav-item"><a href="#" class="nav-link">Home</a></li>
<li class="nav-item"><a href="#" class="nav-link">Work</a></li>
<li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
<li class="nav-item"><a href="#" class="nav-link btn">Register</a></li>
</ul> */

// navLinks: [
//     {
//         linkID: 'link1',
//         href: '#',
//         link: 'Home'
//     },
//     {
//         linkID: 'link2',
//         href: '#',
//         link: 'Our Work'
//     },
//     {
//         linkID: 'link3',
//         href: '#',
//         link: 'About Us'
//     },
//     {
//         linkID: 'link4',
//         href: '#',
//         link: 'Contact',
//         isCTA: true,
//     },

// ]

export const NavLinks = (props) => {
    let markUp = document.createElement('ul');
    markUp.classList.add('nav-container');

    props.forEach((link) => {
        let navItem = document.createElement('li');
        navItem.classList.add('nav-item');

        let navLink = document.createElement('a');
        navLink.href = link.href;
        navLink.innerText = link.link;
        link.isCTA ? navLink.classList.add('nav-link', 'btn') : navLink.classList.add('nav-link');
        
        navItem.appendChild(navLink);
        markUp.appendChild(navItem);
    });

    return markUp;

}