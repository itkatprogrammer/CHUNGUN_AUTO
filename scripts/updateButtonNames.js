import constants from './constants.js';

export function updateButtonNames() {
    if (window.innerWidth < 1200) {
        constants.button3.textContent = 'Записаться';
        constants.button4.textContent = 'Оставить заявку';
    } else {
        constants.button3.innerHTML = 'Забронировать';
        constants.button4.innerHTML = 'Оценить';
    }
}

window.addEventListener('resize', updateButtonNames);
updateButtonNames(); 

