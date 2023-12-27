'use strict'

//***********************************   body    ****************************************************     body
const body_EL = document.querySelector('body');
const body_ST = getComputedStyle(body_EL);

//***********************************    mainPage   *************************************************   mainPage
const mainPage_EL = document.querySelector('body .mainPage');
const mainPage_ST = getComputedStyle(mainPage_EL);

//***********************************    dynamicCont   **********************************************   dynamicCont
const dynamicCont_EL = document.querySelector('.mainPage .dynamicCont');
const dynamicCont_ST = getComputedStyle(dynamicCont_EL);

//***********************************    bottomNavbar   *********************************************   bottomNavbar
const bottomNavbar_EL = document.querySelector('.mainPage .bottomNavbar');
const bottomNavbar_ST = getComputedStyle(bottomNavbar_EL);


// ---------------------------------------  Exports  -----------------------------------------
export {
    body_EL,body_ST,
    mainPage_EL,mainPage_ST,
    dynamicCont_EL,dynamicCont_ST,
    bottomNavbar_EL,bottomNavbar_ST
}