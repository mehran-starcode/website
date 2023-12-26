'use strict'

//***********************************   header    ****************************************************     header
const header_EL = document.querySelector('.mainPage .header');
const header_ST = getComputedStyle(header_EL);
//***********************************   content    ****************************************************     content
const content_EL = document.querySelector('.mainPage .content');
const content_ST = getComputedStyle(content_EL);
//***********************************   footer    ****************************************************     footer
const footer_EL = document.querySelector('.mainPage .footer');
const footer_ST = getComputedStyle(footer_EL);




// ---------------------------------------  Exports  -----------------------------------------
export {
    header_EL,header_ST,
    content_EL,content_ST,
    footer_EL,footer_ST
}