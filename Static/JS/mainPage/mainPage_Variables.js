'use strict'

//***********************************   header    ****************************************************     header
const header_EL = document.querySelector('div.mainPage  header');
const header_ST = getComputedStyle(header_EL);

//***********************************   main    ****************************************************     main
const main_EL = document.querySelector('div.mainPage  main');
const main_ST = getComputedStyle(main_EL);

//***********************************   footer    ****************************************************     footer
const footer_EL = document.querySelector('div.mainPage  footer');
const footer_ST = getComputedStyle(footer_EL);
//***********************************   bottomNavbar    *******************************************     bottomNavbar
const bottomNavbar_EL = document.querySelector('div.mainPage  div.bottomNavbar');
const bottomNavbar_ST = getComputedStyle(bottomNavbar_EL);




// ---------------------------------------  Exports  -----------------------------------------
export {
    header_EL,header_ST,
    main_EL,main_ST,
    footer_EL,footer_ST,
    bottomNavbar_EL,bottomNavbar_ST
}