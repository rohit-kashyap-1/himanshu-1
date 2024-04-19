
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let element = document.querySelector(".scrolltop")
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        element.style.visibility="visible"
        // element.style.opacity="1"

    } else {
        element.style.visibility="hidden"
        // element.style.opacity="0"


    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// let element1 = document.querySelector(".rightarrow");
// let counter = 1;
// let images = document.querySelectorAll(".image");
// let slider=document.querySelector(".slider")
// let navigation=document.querySelectorAll(".navigation");
// console.log(navigation.length)
// const anonymous = () => {
//   element1.addEventListener("click", () => {
//     if (counter < (images.length)) {
//       slider.style.transform = `translateX(-${counter * 1536}px)`;

//       console.log(counter)
//       counter++
//     }
//     else {
//       let zero = counter * 0
//       slider.style.transform = `translateX(${zero}px)`;
//       // console.log("counter greater than 5")
//       counter = 1;
//     }

//   })
// }

// anonymous()



// let images = document.querySelectorAll(".image");
// let slider=document.querySelector(".slider");
// let counter = 1;
// setInterval(()=>{
//   if (counter < (images.length)) {
//     slider.style.transform = `translateX(-${counter * 1536}px)`;
//     console.log(counter)
//     counter++
//   }
//   else {
//     let zero = counter * 0
//     slider.style.transform = `translateX(${zero}px)`;
//     console.log("counter greater than 5")
//     counter = 1;
//   }
// },3000)

//  hero arrow script starts from here

const showarrow = () => {
    let element1 = document.querySelector(".leftarrow");
    let element2 = document.querySelector(".rightarrow");

    element1.style.transform = `translateX(${16}px)`
    element1.style.opacity = "100"
    element1.style.visibility = "visible"

    element2.style.transform = `translateX(-${30}px)`
    element2.style.opacity = "100"
    element2.style.visibility = "visible"
}

const hidearrow = () => {
    let element1 = document.querySelector(".leftarrow");
    let element2 = document.querySelector(".rightarrow");

    element1.style.transform = `translateX(-${16}px)`
    element1.style.opacity = "0"
    element1.style.visibility = "hidden"

    element2.style.transform = `translateX(-${16}px)`
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"
}



const Right = () => {
    // let element1=document.querySelector(".viewcart");
    let element2 = document.querySelector(".ctabg");
    element2.style.translate = "100% 0%"
    // element1.style.border="1px solid black"
    element2.style.backgroundColor = "black"

}
const Left = () => {
    // let element1=document.querySelector(".viewcart");
    let element2 = document.querySelector(".ctabg");
    element2.style.translate = "0% 0%"
    // element1.style.border="none"
    element2.style.backgroundColor = "#08979D"

}

// icon arrow from here


const showarrow2 = () => {
    let element1 = document.querySelector(".leftarrow2");
    let element2 = document.querySelector(".rightarrow2");

    element1.style.transform = `translateX(-${19}px)`
    element1.style.opacity = "100"
    element1.style.visibility = "visible"

    element2.style.transform = `translateX(${19}px)`
    element2.style.opacity = "100"
    element2.style.visibility = "visible"
}

const hidearrow2 = () => {
    let element1 = document.querySelector(".leftarrow2");
    let element2 = document.querySelector(".rightarrow2");

    element1.style.transform = `translateX(${19}px)`
    element1.style.opacity = "0"
    element1.style.visibility = "hidden"

    element2.style.transform = `translateX(-${19}px)`
    element2.style.opacity = "0"
    element2.style.visibility = "hidden"
}

//  box transition from here  


// box 1
const box1over = () => {
    let element1 = document.querySelector(".icon1");
    let element2 = document.querySelector(".h1");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box1out = () => {
    let element1 = document.querySelector(".icon1");
    let element2 = document.querySelector(".h1");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// box 2


const box2over = () => {
    let element1 = document.querySelector(".icon2");
    let element2 = document.querySelector(".h2");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box2out = () => {
    let element1 = document.querySelector(".icon2");
    let element2 = document.querySelector(".h2");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// box 3

const box3over = () => {
    let element1 = document.querySelector(".icon3");
    let element2 = document.querySelector(".h3");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box3out = () => {
    let element1 = document.querySelector(".icon3");
    let element2 = document.querySelector(".h3");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// box 4

const box4over = () => {
    let element1 = document.querySelector(".icon4");
    let element2 = document.querySelector(".h4");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box4out = () => {
    let element1 = document.querySelector(".icon4");
    let element2 = document.querySelector(".h4");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// box 5


const box5over = () => {
    let element1 = document.querySelector(".icon5");
    let element2 = document.querySelector(".h5");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box5out = () => {
    let element1 = document.querySelector(".icon5");
    let element2 = document.querySelector(".h5");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// box 6

const box6over = () => {
    let element1 = document.querySelector(".icon6");
    let element2 = document.querySelector(".h6");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box6out = () => {
    let element1 = document.querySelector(".icon6");
    let element2 = document.querySelector(".h6");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}


// box 7 


const box7over = () => {
    let element1 = document.querySelector(".icon7");
    let element2 = document.querySelector(".h7");
    // element1.style.color="#08979D"
    element1.style.opacity = "1"
    element2.style.color = "#08979D"

}
const box7out = () => {
    let element1 = document.querySelector(".icon7");
    let element2 = document.querySelector(".h7");
    // element1.style.color="#08979D"
    element1.style.opacity = "0.5"
    element2.style.color = "rgb(31 41 55)"

}

// featured product section starts from here

// product 1

const pover = () => {
    let element = document.querySelector(".p1");
    let element2 = document.querySelector(".span1");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "visible"
    element.style.scale = "1.1"

}
const pout = () => {
    let element = document.querySelector(".p1");
    let element2 = document.querySelector(".span1");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}

// Product 2

const pover2 = () => {
    let element = document.querySelector(".p2");
    let element2 = document.querySelector(".span2");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "visible"
    element.style.scale = "1.1"

}
const pout2 = () => {
    let element = document.querySelector(".p2");
    let element2 = document.querySelector(".span2");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}


// Product 2

const pover3 = () => {
    let element = document.querySelector(".p3");
    let element2 = document.querySelector(".span3");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "invisible"
    element.style.scale = "1.1"

}
const pout3 = () => {
    let element = document.querySelector(".p3");
    let element2 = document.querySelector(".span3");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}

// Product 4


const pover4 = () => {
    let element = document.querySelector(".p4");
    let element2 = document.querySelector(".span4");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "visible"
    element.style.scale = "1.1"

}
const pout4 = () => {
    let element = document.querySelector(".p4");
    let element2 = document.querySelector(".span4");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}

// Product 5


const pover5 = () => {
    let element = document.querySelector(".p5");
    let element2 = document.querySelector(".span5");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "visible"
    element.style.scale = "1.1"

}
const pout5 = () => {
    let element = document.querySelector(".p5");
    let element2 = document.querySelector(".span5");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}


// Product 6


const pover6 = () => {
    let element = document.querySelector(".p6");
    let element2 = document.querySelector(".span6");
    element2.style.translate = "0px -30px"
    element2.style.opacity = "1"
    element2.style.visibility = "visible"
    element.style.scale = "1.1"

}
const pout6 = () => {
    let element = document.querySelector(".p6");
    let element2 = document.querySelector(".span6");
    element2.style.translate = "0px 30px"
    element2.style.opacity = "0"
    element2.style.visibility = "invisible"
    element.style.scale = "1"

}


// poster cta 

const Right1 = () => {
    // let element1=document.querySelector(".viewcart");
    let element2 = document.querySelector(".ctabg2");
    element2.style.translate = "100% 0%"
    // element1.style.border="1px solid black"
    element2.style.backgroundColor = "black"

}
const Left1 = () => {
    // let element1=document.querySelector(".viewcart");
    let element2 = document.querySelector(".ctabg2");
    element2.style.translate = "0% 0%"
    // element1.style.border="none"
    element2.style.backgroundColor = "#08979D"

}


// leatest product section from here

const lpover = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps1");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps1");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


const lpover2 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps2");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout2 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps2");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


const lpover3 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps3");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout3 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps3");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}



const lpover4 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps4");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout4 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps4");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}




const lpover5 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps5");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout5 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps5");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


const lpover6 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps6");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout6 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps6");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}



const lpover7 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps7");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout7 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps7");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


const lpover8 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps8");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const lpout8 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".lps8");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


// trending product section starts from here



const tpover = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps1");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const tpout = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps1");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}

const tpover2 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps2");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const tpout2 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps2");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}

const tpover3 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps3");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const tpout3 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps3");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}


const tpover4 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps4");
    element.style.translate = "0px -30px"
    element.style.opacity = "1"
    element.style.visibility = "visible"
    // element.style.scale = "1.1"

}
const tpout4 = () => {
    // let element = document.querySelector(".p1");
    let element = document.querySelector(".tps4");
    element.style.translate = "0px 30px"
    element.style.opacity = "0"
    element.style.visibility = "invisible"
    // element.style.scale = "1"

}








export { showarrow, hidearrow, Right, Left, showarrow2, hidearrow2, box1over, box1out, box2over, box2out, box3over, box3out, box4over, box4out, box5over, box5out, box6over, box6out, box7over, box7out, pover, pout, pover2, pout2, pover3, pout3, pover4, pout4, pover5, pout5, pover6, pout6, Right1, Left1, lpover, lpout, lpover2, lpout2, lpover3, lpout3, lpover4, lpout4, lpover5, lpout5, lpover6, lpout6, lpover7, lpout7, lpover8, lpout8, tpover, tpout, tpover2, tpout2, tpover3, tpout3, tpover4, tpout4,topFunction }

