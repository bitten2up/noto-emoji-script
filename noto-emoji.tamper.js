// ==UserScript==
// @name         Noto Emoji everywhere
// @namespace    https://bitten2up.dev
// @version      1.0
// @description  use noto monochrome emoji everywhere
// @author       Bitten2up
// @match        *://*/*
// @icon         https://github.com/litten2up/bittens-adventure/blob/raylib-rewrite-because-yes/assets/window.png?raw=true
// @grant        none
// ==/UserScript==
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
(function() {
    'use strict';
    // Your code here...
    addGlobalStyle(`@font-face {font-family: 'Noto Sans Emoji';src: url('https://raw.githubusercontent.com/litten2up/noto-emoji-script/main/Noto-Sans-emoji.ttf')format('truetype');`);
    addGlobalStyle("*{font-family: 'Noto Sans emoji', sans-serif !important;}");
})();
