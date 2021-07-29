
// Footer Reference Markup
/* <footer>
    <div class="copy-right">
        2021 Raw Engineering
    </div>
    <div class = "social-links">
        <ul>
            <li><i>   </i></li>
            <li><i>   </i></li>
            <li><i>   </i></li>
        </ul>
    </div>
</footer> */

export const Footer = (data) => {
    let markup = document.createElement('footer');
    let copyrightDiv = document.createElement('div');
    copyrightDiv.classList.add('copy-right');
    copyrightDiv.textContent = data.copyrightText;
    markup.appendChild(copyrightDiv);

    let socialDiv = document.createElement('div');
    socialDiv.classList.add('social-links');
    let list = document.createElement('ul');

    data.socialLinks.forEach((item) => {
        let footerItem = document.createElement('li');
        footerItem.classList.add('footer-link');
        let icon = document.createElement('a');
        icon.href = item.href;
        icon.classList.add('fab');
        icon.classList.add(`${item.iconClass}`);
        footerItem.appendChild(icon);
        list.appendChild(footerItem);
    })
    socialDiv.appendChild(list);
    markup.appendChild(socialDiv);

    return markup;
}

