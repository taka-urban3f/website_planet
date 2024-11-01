'use strict';

const elem_bgmButton = document.querySelector('.l-header__soundButton');
if (elem_bgmButton) {
    elem_bgmButton.addEventListener('click', function () {
        const elem_bgm = document.querySelector('#bgm');
        if (elem_bgm) {
            if (elem_bgmButton.classList.contains('l-header__soundButton--on')) {
                elem_bgm.pause();
            } else {
                elem_bgm.play();
            }

            elem_bgmButton.classList.toggle('l-header__soundButton--on');
        }
    });
}

window.addEventListener('load', function(){
    document.querySelector('.p-loading').style.display = 'none';
});