'use strict'

//***********************************   header    ***********************************************       header
const header_EL = document.querySelector('.mainPage .header');
const header_ST = getComputedStyle(header_EL);

//***********************************   main    ***********************************************         main
const main_EL = document.querySelector('.mainPage .main');
const main_ST = getComputedStyle(main_EL);

//***********************************   content   ***********************************************       content
const content_EL = document.querySelector('.mainPage .content');
const content_ST = getComputedStyle(content_EL);

//***********************************   sidebar   ***********************************************       sidebar
const sidebar_EL = document.querySelector('.mainPage .sidebar');
const sidebar_ST = getComputedStyle(sidebar_EL);

//***********************************   footer   ***********************************************        footer
const footer_EL = document.querySelector('.mainPage .footer');
const footer_ST = getComputedStyle(footer_EL);







// ---------------------------------------  Exports  -----------------------------------------
export {
    header_EL,header_ST,
    main_EL,main_ST,
    content_EL,content_ST,
    sidebar_EL,sidebar_ST,
    footer_EL,footer_ST
}