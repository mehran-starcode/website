'use strict'

//***********************************   profile    ***********************************************       profile
const profile_EL = document.querySelector('.mainPage .profile');
const profile_ST = getComputedStyle(profile_EL);

//***********************************   profileIcon    ********************************************     profileIcon
const profileIcon_EL = document.querySelector('.mainPage img.profileIcon');
const profileIcon_ST = getComputedStyle(profileIcon_EL);

//***********************************   profileCont    ********************************************     profileCont
const profileCont_EL = document.querySelector('.mainPage div.profileCont');
const profileCont_ST = getComputedStyle(profileCont_EL);



// ---------------------------------------  Exports  -----------------------------------------
export {
    profile_EL,profile_ST,
    profileIcon_EL,profileIcon_ST,
    profileCont_EL,profileCont_ST
}