// const imgCarElements = document.querySelectorAll('.img__car');

// imgCarElements.forEach((element, index) => {
//     const imgElement = document.createElement('img');

//     const xsPath = `./../assets/src/xs/services_img${index + 1}.png`;
//     const sPath = `./../assets/src/s/services_img${index + 1}.png`
//     const mPath = `./../assets/src/m/services_img${index + 1}.png`;
//     const lPath = `./../assets/src/l/services_img${index + 1}.png`;

//     function updateImgSrc() {
//         const screenWidth = window.innerWidth;
//         if (screenWidth < 600) {
//             imgElement.setAttribute('src', xsPath);
//         } else if (screenWidth < 900) {
//             imgElement.setAttribute('src', sPath);
//         } else if (screenWidth < 1200) {
//             imgElement.setAttribute('src', mPath);
//         } else {
//             imgElement.setAttribute('src', lPath);
//         }
//     }

//     updateImgSrc();
//     window.addEventListener('resize', updateImgSrc);

//     imgElement.classList.add(`img-car${index + 1}`);
//     element.appendChild(imgElement);
// });


import { updateButtonNames } from './scripts/updateButtonNames.js';
import hamburger from './scripts/hamburger.js';
import updateImgSrc  from './scripts/updateImgSrc.js'







