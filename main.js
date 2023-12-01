let main_page_EL = document.getElementById("mainPage");
let items_nav_main_page_EL = document.querySelectorAll(".mainPage_nav_li > a");
let mainPage_nav_li_details_ELs = document.getElementsByClassName("mainPage_nav_li_details");
let mainPage_nav_li_backPrimery_ELs = document.getElementsByClassName("mainPage_nav_li_backPrimery");
let mainPage_nav_li_backSecondery_ELs = document.getElementsByClassName("mainPage_nav_li_backSecondery");
let mainPage_navbar_background_1_bottom_EL = document.getElementById("mainPage_navbar_background_1_bottom")


let darkColor = '#181818';
let primeryColor = 'purple';
let secondryColor = '#aa9898';
let lightColor = 'rgb(232, 216, 195)';


setTimeout(function(){
    main_page_EL.style.zIndex = 20;
    main_page_EL.style.animation = 'opacity_to_one 2s'
    main_page_EL.style.animationFillMode = 'forwards'
},2500)


let status = 0


for (let i=0; i<mainPage_nav_li_details_ELs.length;i++){



    items_nav_main_page_EL[i+1].addEventListener('mouseenter', event => {

        mainPage_nav_li_backSecondery_ELs[i].style.animation = "divergent_height_nav_1 200ms"
        mainPage_nav_li_backSecondery_ELs[i].style.animationFillMode = 'forwards'
        setTimeout(event => {
            mainPage_nav_li_backPrimery_ELs[i+2].style.borderBottomLeftRadius = '10px'
        },40)
        items_nav_main_page_EL[i+1].classList.add("mainPage_nav_li_a_main_hover")




        mainPage_nav_li_details_ELs[i].style.display = 'flex'
        mainPage_nav_li_details_ELs[i].style.animation = 'opacity_to_one 200ms,divergent_height_nav_2 200ms'
        mainPage_nav_li_details_ELs[i].style.animationFillMode = 'forwards'

        setTimeout(event=>{mainPage_nav_li_details_ELs[i].style.display = 'flex'},200)


    })
    items_nav_main_page_EL[i+1].addEventListener('mouseout', event => {

        setTimeout(event => {
            mainPage_nav_li_backPrimery_ELs[i+2].style.borderBottomLeftRadius = '0px'
        },40)

        items_nav_main_page_EL[i+1].classList.remove("mainPage_nav_li_a_main_hover")
        mainPage_nav_li_backSecondery_ELs[i].style.animation = "converge_height_nav_1 200ms"
        mainPage_nav_li_backSecondery_ELs[i].style.animationFillMode = 'forwards'



        mainPage_nav_li_details_ELs[i].style.animation = 'opacity_to_ziro 200ms,converge_height_nav_2 400ms'
        mainPage_nav_li_details_ELs[i].style.animationFillMode = 'forwards'


        status = 1
        setTimeout(event => {
            status = 0
        },5)


    })


}




for (let i=0;i<mainPage_nav_li_details_ELs.length;i++){





    mainPage_nav_li_details_ELs[i].addEventListener('mouseenter', event => {

        if (status===1) {

            mainPage_nav_li_details_ELs[i].style.display = 'flex'
            mainPage_nav_li_details_ELs[i].style.animation = 'opacity_to_one 200ms,divergent_height_nav_2 200ms'
            mainPage_nav_li_details_ELs[i].style.animationFillMode = 'forwards'


            mainPage_nav_li_backSecondery_ELs[i].style.animation = "divergent_height_nav_1 200ms"
            mainPage_nav_li_backSecondery_ELs[i].style.animationFillMode = 'forwards'
            setTimeout(event => {
                mainPage_nav_li_backPrimery_ELs[i+2].style.borderBottomLeftRadius = '10px'
            },40)
            items_nav_main_page_EL[i+1].classList.add("mainPage_nav_li_a_main_hover")


            items_nav_main_page_EL[i+2].style.animation = 'borderBottomLeftRadius 300ms'
            items_nav_main_page_EL[i+2].style.animationFillMode = 'forwards'
            items_nav_main_page_EL[i+1].classList.add("mainPage_nav_li_a_main_hover")

            
        }
    })

    mainPage_nav_li_details_ELs[i].addEventListener('mouseleave', event => {


        setTimeout(event => {
            mainPage_nav_li_backPrimery_ELs[i+2].style.borderBottomLeftRadius = '0px'
        },40)

        items_nav_main_page_EL[i+1].classList.remove("mainPage_nav_li_a_main_hover")
        mainPage_nav_li_backSecondery_ELs[i].style.animation = "converge_height_nav_1 200ms"
        mainPage_nav_li_backSecondery_ELs[i].style.animationFillMode = 'forwards'



        mainPage_nav_li_details_ELs[i].style.animation = 'opacity_to_ziro 200ms,converge_height_nav_2 400ms'
        mainPage_nav_li_details_ELs[i].style.animationFillMode = 'forwards'


        status = 2
        setTimeout(event => {
            status = 0
        },5)


        setTimeout(event => {
            mainPage_nav_li_details_ELs[i].style.display = 'none'
        },200)

    })



}


