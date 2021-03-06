export const Banner = (props) => {
    let banner = document.createElement('div');
    banner.classList.add('banner');
    banner.style.backgroundImage = `url(${props.bannerImage.imageSrc})`;

    let heading = document.createElement('h1');
    heading.innerText = `${props.heading}`;
    heading.classList.add('banner-heading');

    let subtitle = document.createElement('p');
    subtitle.innerText = `${props.subtitle}`;
    subtitle.classList.add('banner-tagline');
    
    let cta = document.createElement('a');
    cta.innerText = `${props.cta.link}`;
    cta.href = `${props.cta.href}`;
    cta.classList.add('btn')

    banner.appendChild(heading);
    banner.appendChild(subtitle);
    banner.appendChild(cta);

    return banner;


}