'use strict';

// ボタンクリックによるBGMのオン・オフ処理。
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

// ローディング画面の非表示処理。
function hideLoadingScreen() {
    const elem_loading = document.querySelector('.p-loading');
    if (elem_loading) {
        elem_loading.style.display = 'none';
    }
}

window.addEventListener('load', function () {
    hideLoadingScreen();
});
// 読み込み開始から５秒経過したら、読み込み中でもローディング画面を非表示にする。
setTimeout(hideLoadingScreen, 5000);