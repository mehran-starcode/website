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






// ---------------------------------------  Exports  -----------------------------------------
export {
    body_EL,body_ST,
    mainPage_EL,mainPage_ST,
    secondPage_EL,secondPage_ST
}