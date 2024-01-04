'use strict'

//***********************************   sidebarIcon    ******************************************     sidebarIcon
const sidebarIcon_EL = document.querySelector('div.mainPage  div.sidebarIcon');
const sidebarIcon_ST = getComputedStyle(sidebarIcon_EL);

//*********************************   sidebarCont    ******************************************       sidebarCont
const sidebarCont_EL = document.querySelector('div.mainPage  div.sidebarCont');
const sidebarCont_ST = getComputedStyle(sidebarCont_EL);

//*********************************   higherLayer    ******************************************       higherLayer
const higherLayer_EL = document.querySelector('div.mainPage  div.higherLayer');



// ---------------------------------------  Exports  -----------------------------------------
export {
    sidebarIcon_EL,sidebarIcon_ST,
    sidebarCont_EL,sidebarCont_ST,
    higherLayer_EL
}