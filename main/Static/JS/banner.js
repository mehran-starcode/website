'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "./main.js";
import * as navbar from "./navbar.js";
import * as content from "./content.js";
import * as sidebar from "./sidebar.js";
import * as footer from "./footer.js";
// ----------------------------------  [ELs] && [STs]  ------------------------------------
const bannerVideo_EL = document.querySelector('#banner > video');
const headerBanner_EL = document.getElementById("headerBanner");
// ---------------------------------------- Body  -----------------------------------------

window.addEventListener('load',event=>{
    bannerVideo_EL.play()
})

headerBanner_EL.innerHTML = navigator.platform




// ---------------------------------------  Exports  -----------------------------------------
export {}