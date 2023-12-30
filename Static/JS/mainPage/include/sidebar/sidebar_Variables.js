'use strict'

//***********************************   sidebar    ***********************************************     sidebar
const sidebar_EL = document.querySelector('div.mainPage  aside.sidebar');
const sidebar_ST = getComputedStyle(sidebar_EL);
//***********************************   sidebarIcon    ******************************************     sidebarIcon
const sidebarIcon_EL = document.querySelector('div.mainPage  div.sidebarIcon');
const sidebarIcon_ST = getComputedStyle(sidebarIcon_EL);
//***********************************   pips    *************************************************        pips
const pip_ELs = document.querySelectorAll('div.mainPage  div.sidebarIcon  div.pip');

//*********************************   sidebarCont    ******************************************       sidebarCont
const sidebarCont_EL = document.querySelector('div.mainPage  div.sidebarCont');
const sidebarCont_ST = getComputedStyle(sidebarCont_EL);



// ---------------------------------------  Exports  -----------------------------------------
export {
    sidebar_EL,sidebar_ST,
    sidebarIcon_EL,sidebarIcon_ST,
    pip_ELs,
    sidebarCont_EL,sidebarCont_ST
}