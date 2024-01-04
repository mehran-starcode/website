'use strict'
// -------------------------------------  Imports ----------------------------------------
import * as main from "../../../main/main.js";
import * as Variables from "./sidebar_Variables.js";
// ---------------------------------------- Body  -----------------------------------------
let status_click_sidebarIcon = 'close'

Variables.sidebarIcon_EL.addEventListener('click',event=>{
    if (status_click_sidebarIcon==='close'){
        Variables.sidebarIcon_EL.style.cssText = 'animation: open-sidebar-icon 100ms;animation-fill-mode: forwards;animation-timing-function: ease-in;'
        Variables.sidebarCont_EL.style.cssText = 'animation: open-sidebar-Cont 300ms 80ms;animation-fill-mode: forwards;animation-timing-function: cubic-bezier(.1,.1,.2,.8);'
        Variables.higherLayer_EL.style.cssText = 'animation: radius-to-60 100ms 70ms;animation-fill-mode: forwards;'
        main.mainPage.topNavbar.Variables.websiteLogo_EL.style.cssText = 'animation: magnifier-website-logo 800ms;animation-fill-mode: forwards;'
        status_click_sidebarIcon = 'open'

    }else {
        setTimeout(event=>{
            Variables.sidebarIcon_EL.style.cssText = 'animation: close-sidebar-icon 700ms;animation-fill-mode: forwards;'
        },120)

        Variables.sidebarCont_EL.style.cssText = 'animation: close-sidebar-Cont 300ms;animation-fill-mode: forwards;animation-timing-function: cubic-bezier(.1,.1,.2,.8);'
        Variables.higherLayer_EL.style.cssText = 'animation: radius-to-zero 300ms;animation-fill-mode: forwards;'
        main.mainPage.topNavbar.Variables.websiteLogo_EL.style.cssText = 'animation: shrinker-website-logo 800ms;animation-fill-mode: forwards;'
        status_click_sidebarIcon = 'close'
    }


})




// ---------------------------------------  Exports  -----------------------------------------
export {
    Variables
}