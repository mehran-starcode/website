'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "../../../main/main.js";
import * as Variables from "./sidebar_Variables.js";
// ---------------------------------------- Body  -----------------------------------------
let status_click_sidebarIcon = 'close'

Variables.sidebarIcon_EL.addEventListener('click',event=>{
    if (status_click_sidebarIcon==='close'){
        Variables.sidebarIcon_EL.style.cssText = 'animation: open-sidebar-icon 300ms;animation-fill-mode: forwards;'
        Variables.sidebarCont_EL.style.cssText = 'animation: open-sidebar-Cont 300ms;animation-fill-mode: forwards;'
        status_click_sidebarIcon = 'open'
    }else {
        Variables.sidebarIcon_EL.style.cssText = 'animation: close-sidebar-icon 300ms;animation-fill-mode: forwards;'
        Variables.sidebarCont_EL.style.cssText = 'animation: close-sidebar-Cont 300ms;animation-fill-mode: forwards;'
        status_click_sidebarIcon = 'close'
    }
})





// ---------------------------------------  Exports  -----------------------------------------
export {
    Variables
}