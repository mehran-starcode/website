'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "../../../main/main.js";
import * as Variables from "./sidebar_Variables.js";
// ---------------------------------------- Body  -----------------------------------------
Variables.sidebar_EL.addEventListener('click',event=>{
    Variables.pip_ELs[0].style.cssText = 'animation: margin-bottom-pip---0 200ms;animation-fill-mode:forwards;transform: rotate(45deg);'
    Variables.pip_ELs[1].style.opacity = '0'
    Variables.pip_ELs[2].style.cssText = 'animation: margin-top-pip---0 200ms;animation-fill-mode:forwards;transform: rotate(-45deg);'
})









// ---------------------------------------  Exports  -----------------------------------------
export {
    Variables
}