// data : {
//     imageSrc: `${basePath}/surfboard-logo.png`,
//     alt: "website logo",
// },

export const Logo = (data) =>{
    let markUp = document.createElement('div');
    markUp.classList.add('company-logo');
    let logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.src = data.imageSrc;
    logoImg.alt = data.alt;

    markUp.appendChild(logoImg);
    return markUp;
};