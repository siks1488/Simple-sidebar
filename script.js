const openbt = document.querySelector(`.fa-solid.fa-bars`);
const closebt = document.querySelector(`.fa-solid.fa-xmark`);
const menu = document.querySelector(`.menu`);

const openMenu = function(){
    menu.classList.remove(`hidden`);
    openbt.classList.add(`hidden`);
    closebt.classList.remove(`hidden`);
}
const closeMenu = function(){
    menu.classList.add(`hidden`);
    closebt.classList.add(`hidden`);
    openbt.classList.remove(`hidden`);
}
openbt.addEventListener(`click`,openMenu);
closebt.addEventListener(`click`,closeMenu);
