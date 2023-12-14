'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "./main.js";
import * as navbar from "./navbar.js";
import * as content from "./content.js";
import * as sidebar from "./sidebar.js";
import * as footer from "./footer.js";
// ----------------------------------  [ELs] && [STs]  ------------------------------------
const bannerVideo_EL = document.querySelector('#banner > video')
// ---------------------------------------- Body  -----------------------------------------

window.addEventListener('load',event=>{
    bannerVideo_EL.play()
})






// ---------------------------------------  Exports  -----------------------------------------
export {}