

/* //////////   MENU BURGER //////////////////*/
const iconWrapper = document.querySelector('.menu__icon__wrapper');
const burger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


iconWrapper.onclick = function(){
    burger.classList.toggle('menu-icon-active');
    menuBody.classList.toggle('menu__body_active');

}


/*
document.querySelector('.menu__icon__wrapper').onclick = function(){
    document.querySelector('.menu__icon').classList.toggle('menu-icon-active');
}
*/


/* ibg */
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
    ibg();