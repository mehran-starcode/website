'use strict'

//***********************************   body    ****************************************************     body
const body_EL = document.querySelector('body');
const body_ST = getComputedStyle(body_EL);

//***********************************   mainPage   *************************************************     mainPage
const mainPage_EL = document.querySelector('body .mainPage');
const mainPage_ST = getComputedStyle(mainPage_EL);

//***********************************   secondPage   ***********************************************     secondPage
const secondPage_EL = document.querySelector('body .secondPage');
const secondPage_ST = getComputedStyle(secondPage_EL);

//********************************   navigable_container   ************************************     navigable_container
const naviCont_EL = document.querySelector('.mainPage .navigable_container');
const naviCont_ST = getComputedStyle(naviCont_EL);

//***********************************   Fixed Container   ***************************************    Fixed Container
const fixCont_EL = document.querySelector('.mainPage .fixed_container');
const fixCont_ST = getComputedStyle(fixCont_EL);






// ---------------------------------------  Exports  -----------------------------------------
export {
    body_EL,body_ST,
    mainPage_EL,mainPage_ST,
    secondPage_EL,secondPage_ST,
    naviCont_EL,naviCont_ST,
    fixCont_EL,fixCont_ST
}