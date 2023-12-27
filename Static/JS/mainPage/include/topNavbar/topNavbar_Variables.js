'use strict'

//***********************************   topNavbar    *********************************************       topNavbar
const topNavbar_EL = document.querySelector('.mainPage .topNavbar');
const topNavbar_ST = getComputedStyle(topNavbar_EL);
//***********************************   profile    ***********************************************       profile
const profile_EL = document.querySelector('.mainPage .profile');
const profile_ST = getComputedStyle(profile_EL);
//***********************************   profileIcon    ********************************************     profileIcon
const profileIcon_EL = document.querySelector('.mainPage img.profileIcon');
const profileIcon_ST = getComputedStyle(profileIcon_EL);
//***********************************   profileCont    ********************************************     profileCont
const profileCont_EL = document.querySelector('.mainPage div.profileCont');
const profileCont_ST = getComputedStyle(profileCont_EL);
//***********************************   websiteLogo    ********************************************     websiteLogo
const websiteLogo_EL = document.querySelector('.mainPage a.websiteLogo');
const websiteLogo_ST = getComputedStyle(websiteLogo_EL);
//***********************************   websiteLogoImage    ***********************************      websiteLogoImage
const websiteLogoImage_EL = document.querySelector('.mainPage img.websiteLogoImage');
const websiteLogoImage_ST = getComputedStyle(websiteLogoImage_EL);
//***************************************   sidebar    *****************************************          sidebar
const sidebar_EL = document.querySelector('.mainPage aside.sidebar');
const sidebar_ST = getComputedStyle(sidebar_EL);




// ---------------------------------------  Exports  -----------------------------------------
export {
    topNavbar_EL,topNavbar_ST,
    profile_EL,profile_ST,
    profileIcon_EL,profileIcon_ST,
    profileCont_EL,profileCont_ST,
    websiteLogo_EL,websiteLogo_ST,
    websiteLogoImage_EL,websiteLogoImage_ST,
    sidebar_EL,sidebar_ST
}