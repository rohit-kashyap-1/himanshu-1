

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let element = document.querySelector(".navbar")
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

        element.style.top = "0";
        element.style.position = "fixed"
        element.classList.add("w-full")
        element.classList.add("shadow-lg")
        element.classList.add("px-27")
        // element.classList.add("shadow-gray-300")
    } else {
        element.style.position = "static"
        element.classList.remove("w-full")
        element.classList.remove("shadow-lg")
        element.classList.add("px-27")
        // element.style.translate="0px 0px"
        // element.style.top = "-50px";
    }
}


// dropdown 1 starts from here


const mouseover = () => {
    let element1 = document.querySelector(".lang-dropdown");
    let element2 = document.querySelector(".dropdown1");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -13px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const mouseout = () => {
    let element1 = document.querySelector(".lang-dropdown");
    let element2 = document.querySelector(".dropdown1");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"
    // element2.classList.add("hidden")
    // element2.style.display="none"   

}

// home dropdown starts from here

const homeover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".homedropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -29px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const homeout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".homedropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}

// about dropdown starts from here

const aboutover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".aboutdropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -29px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const aboutout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".aboutdropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}

// shop dropdown starts from here
const shopover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".shopdropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -29px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const shopout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".shopdropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}


// news dropdown starts from here

const newsover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".newsdropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -29px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const newsout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".newsdropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}



const pageover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".pagedropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -29px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const pageout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".pagedropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}


const userover = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".userdropdown");
    // element2.style.display="block" 
    // element2.classList.remove("hidden")
    element2.style.translate = "0px -31px"
    element2.style.opacity = "100"
    element2.style.visibility = "visible"

}
const userout = () => {
    // let element1 = document.querySelector(".homekey");
    let element2 = document.querySelector(".userdropdown");
    element2.style.translate = "0px 0px"
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"

}

const showSidebar=()=>{
    let element1 = document.querySelector(".cartsidebar");
    let element2 = document.querySelector(".sidebarOverlay");
    element1.style.translate = "-100% 0px"
    // element2.style.width = "100vw"
    element2.style.zIndex = "20"
    
   
}

const hideSidebar=()=>{
    let element1 = document.querySelector(".sidebarOverlay");
    let element2 = document.querySelector(".cartsidebar");

    element2.style.translate = "100% 0px"
    element1.style.zIndex = "-10"
    // element2.style.width = "100vw"
    // element2.style.zIndex = "10"
   
}

// sidebar buttons

const Right=()=>{
    // let element1=document.querySelector(".viewcart");
    let element2=document.querySelector(".viewcartbg");
    element2.style.translate="100% 0%"
    // element1.style.border="1px solid black"
    element2.style.backgroundColor="black"

}
const Left=()=>{
    // let element1=document.querySelector(".viewcart");
    let element2=document.querySelector(".viewcartbg");
    element2.style.translate="0% 0%"
    // element1.style.border="none"
    element2.style.backgroundColor="#08979D"

}

const Right2=()=>{
    // let element1=document.querySelector(".viewcart");
    let element2=document.querySelector(".checkoutbg");
    element2.style.translate="0% 0%"
    // element1.style.border="1px solid black"
    element2.style.backgroundColor="black"

}
const Left2=()=>{
    // let element1=document.querySelector(".viewcart");
    let element2=document.querySelector(".checkoutbg");
    element2.style.translate="-100% 0%"
    // element1.style.border="none"
    element2.style.backgroundColor="#08979D"

}
 



export { mouseover, mouseout, homeover, homeout, aboutover, aboutout, shopover, shopout, newsover, newsout,pageover , pageout, userover, userout,showSidebar,hideSidebar,Right,Left,Right2,Left2 }

