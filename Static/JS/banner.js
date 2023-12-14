'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "./main.js";
import * as navbar from "./navbar.js";
import * as content from "./content.js";
import * as sidebar from "./sidebar.js";
import * as footer from "./footer.js";
// ---------------------------------------- Body  -----------------------------------------
const bodyEL = document.querySelector('body');
const background_img_h1_EL = document.querySelector('#btn-container > img');
const btn_grinder_EL = document.querySelector('#headerBanner');


btn_grinder_EL.addEventListener('click',event=>{
    background_img_h1_EL.style.animation = 'fullScreen 1s'
    background_img_h1_EL.style.animationFillMode = 'forwards'
})











// ---------------------------------------  Exports  -----------------------------------------
export {}