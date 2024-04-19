
import React, { useState } from 'react'
import "./Main.css"
import "./Script.js"
// import Aos from 'aos'
// import { useEffect } from 'react'
import shieldimage from "../Assets/shield section/shield-plus.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import author from "../Assets/shield section/author.jpg"
import callimage from "../Assets/shield section/phone.png"
import offer1 from "../Assets/offer/img1.jpg"
import offer2 from "../Assets/offer/img2.jpg"
import offer3 from "../Assets/offer/img3.jpg"
import left1 from "../Assets/featured/left1.jpg"
import left2 from "../Assets/featured/left2.jpg"
import p1 from "../Assets/featured/p1.png"
import p2 from "../Assets/featured/p2.png"
import p3 from "../Assets/featured/p3.png"
import p4 from "../Assets/featured/p4.png"
import p5 from "../Assets/featured/p5.png"
import p6 from "../Assets/featured/p6.png"
import lp1 from "../Assets/leatest products/lp1.png"
import lp2 from "../Assets/leatest products/lp2.png"
import lp3 from "../Assets/leatest products/lp3.png"
import lp4 from "../Assets/leatest products/lp4.png"
import lp5 from "../Assets/leatest products/lp5.png"
import lp6 from "../Assets/leatest products/lp6.png"
import lp7 from "../Assets/leatest products/lp7.png"
import lp8 from "../Assets/leatest products/lp8.png"
import o21 from "../Assets/offer2/o2.jpg"
import o22 from "../Assets/offer2/o3.jpg"
import o23 from "../Assets/offer2/o4.jpg"
import { faAngleUp, faArrowLeft, faArrowRight, faBong, faBoxTissue, faCartShopping, faCreditCard, faEye, faGift, faHeart, faLeaf, faMaskFace, faMicroscope, faNotesMedical, faPumpMedical, faRecycle, faSackDollar, faSquareCheck, faStar, faStarHalfStroke, faSyringe, faTooth, faTruckFast, faWind } from '@fortawesome/free-solid-svg-icons'
import { Left, Left1, Right, Right1, box1out, box1over, box2out, box2over, box3out, box3over, box4out, box4over, box5out, box5over, box6out, box6over, box7out, box7over, hidearrow, hidearrow2, lpout, lpout2, lpout3, lpout4, lpout5, lpout6, lpout7, lpout8, lpover, lpover2, lpover3, lpover4, lpover5, lpover6, lpover7, lpover8, pout, pout2, pout3, pout4, pout5, pout6, pover, pover2, pover3, pover4, pover5, pover6, showarrow, showarrow2, topFunction, tpout, tpout2, tpout3, tpout4, tpover, tpover2, tpover3, tpover4 } from './Script.js'
// import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'



const Main = () => {

    const [styleOfButtonHover,setStyleOfButtonHover] = useState({})
    // useEffect(() => {
    //     Aos.init({
    //         duration: 2000
    //     });
    // }, []);

    // let element = document.querySelector(".herodiv1");
    // element.style.backgroundColor = "black"

    function helloWorld(){
        console.log("hello worlld")
    }
    function handleOver(){
        console.log('hjello')
        setStyleOfButtonHover({transform:'translateX(100px)'})

    }
    function handleLeave(){
        setStyleOfButtonHover({transform:'translateX(0)'})
    }
    return (
        <main className='main w-full flex flex-col relative scroll-smooth transition-all duration-500' onScroll={helloWorld}>
            <span className='invisible scrolltop fixed right-15 z-10 bottom-20 shadow-lg bg-white shadow-gray-500 flex justify-center items-center rotate-45 cursor-pointer hover:text-white hover:bg-theme duration-300' onClick={topFunction}>
                <FontAwesomeIcon icon={faAngleUp} className=' z-20 p-4 -rotate-45 font-bold ' />
            </span>
            <div className=' w-full h-107 flex justify-between items-center  overflow-x-hidden  ' onMouseOver={showarrow} onMouseOut={hidearrow}>
                <FontAwesomeIcon icon={faArrowLeft} className='leftarrow absolute left-16 text-2xl p-4 border-2 border-white bg-transparent hover:bg-theme hover:text-white hover:border-transparent duration-300  ease-in-out invisible cursor-pointer' />
                <div className='frame w-full flex justify-start   h-107  bg-pink-500  '>
                    {/* <div className='flex self-end absolute bottom-10 left-2/4 gap-x-2 h-10 justify-center items-center'>
                        <span className='dot p-2 rounded-full bg-theme hover:p-2 hover:bg-theme duration-200 ease-in-out '></span>
                        <span className='dot p-1.25 rounded-full bg-gray-400 hover:p-2 hover:bg-theme duration-200 ease-in-out'></span>
                        <span className='dot p-1.25 rounded-full bg-gray-400 hover:p-2 hover:bg-theme duration-200 ease-in-out'></span>

                    </div> */}
                    <div className='slider  h-107  duration-1000 flex bg-blue-500 '>
                        <div className="sliderImage1 w-hero  h-107 image  bg-right bg-no-repeat bg-cover    overflow-x-hidden flex justify-start" >
                            <div className='flex flex-col items-start  absolute left-40 top-48  w-104'>
                                <div className='flex gap-x-2 items-center pl-5.75'>
                                    <FontAwesomeIcon icon={faSyringe} className='text-theme' />
                                    <p className='font-semibold'><span className='text-lg'>100%</span> genuine Products</p>
                                </div>
                                <h1 className='text-5xl font-bold pl-5.75 mt-4 text-gray-900'>
                                    Get 20% Discount <br /> Of N95 Mask
                                </h1>
                                <p className='pl-7 border-l-1 border-black mt-6 ml-4 text-gray-500 '>Houzez allow you to design unlimited panels  <br /> custom forms to </p>

                                <a onMouseEnter={handleOver} onMouseLeave={handleLeave} href="/" className="cta flex justify-center items-center border-1 border-white ml-4 mt-12 px-10 py-4.25     bg-white text-white  transition-all duration-300 relative hover:text-black hover:border-black overflow-hidden" onMouseOver={Right} onMouseOut={Left} >
                                    <p className="z-10">Shop Now</p>
                                    <span className={"ctabg absolute w-full h-full bg-theme top-0 left-0 z-0 hover:right-full transition-all duration-300"} style={styleOfButtonHover}></span>
                                </a>
                            </div>
                        </div>
                        <div className="sliderImage2 w-hero  h-107 image  bg-right bg-no-repeat bg-cover    overflow-hidden flex justify-center" ></div>
                        <div className="sliderImage3 w-hero  h-107 image  bg-right bg-no-repeat bg-cover    overflow-hidden flex justify-center" ></div>
                    </div>

                </div>
                <FontAwesomeIcon icon={faArrowRight} className='rightarrow absolute right-16 text-2xl p-4 border-2 border-white bg-transparent  hover:bg-theme hover:text-white hover:border-transparent duration-300  ease-in-out invisible cursor-pointer' />
            </div>
            <div className='w-full h-64 bg-white flex justify-center items-center'>
                <div className='w-300  flex justify-between border-b-1 border-gray-300 pb-6 px-6 relative' onMouseOver={showarrow2} onMouseOut={hidearrow2}>
                    <FontAwesomeIcon icon={faArrowLeft} className=' leftarrow2 absolute rounded-full  bottom-9 -left-5  p-4 border-1 border-gray-300 transition-all duration-300 ease-in-out invisible font-black' />
                    <div className='flex box1 flex-col gap-y-3  pb-6 cursor-pointer' onMouseOver={box1over} onMouseOut={box1out}>
                        <FontAwesomeIcon icon={faNotesMedical} className='icon1 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h1 font-bold text-gray-800 duration-300'>Best Deals</h1>
                    </div>
                    <div className='flex box2 flex-col gap-y-3 pb-6 cursor-pointer ' onMouseOver={box2over} onMouseOut={box2out}>
                        <FontAwesomeIcon icon={faBoxTissue} className='icon2 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h2 font-bold text-gray-800 duration-300'>Germs Pads</h1>
                    </div>
                    <div className='flex box3 flex-col gap-y-3 pb-6 cursor-pointer' onMouseOver={box3over} onMouseOut={box3out}>
                        <FontAwesomeIcon icon={faPumpMedical} className='icon3 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h3 font-bold text-gray-800 duration-300'>Accessories</h1>
                    </div>
                    <div className='flex box4 flex-col gap-y-3 pb-6 cursor-pointer' onMouseOver={box4over} onMouseOut={box4out}>
                        <FontAwesomeIcon icon={faBong} className='icon4 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h4 font-bold text-gray-800 duration-300'>Medicine Cap</h1>
                    </div>
                    <div className='flex box5 flex-col gap-y-3 pb-6 cursor-pointer' onMouseOver={box5over} onMouseOut={box5out}>
                        <FontAwesomeIcon icon={faTooth} className='icon5 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h5 font-bold text-gray-800 duration-300'>Dental Items</h1>
                    </div>
                    <div className='flex box6 flex-col gap-y-3 pb-6 cursor-pointer' onMouseOver={box6over} onMouseOut={box6out}>
                        <FontAwesomeIcon icon={faMicroscope} className='icon6 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className=' h6 font-bold text-gray-800 duration-300'>Microscopes</h1>
                    </div>
                    <div className='flex box7 flex-col gap-y-3 pb-6 cursor-pointer' onMouseOver={box7over} onMouseOut={box7out}>
                        <FontAwesomeIcon icon={faSyringe} className='icon7 text-3xl text-theme opacity-50 duration-300' />
                        <h1 className='h7 font-bold text-gray-800 duration-300'>All Products</h1>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='rightarrow2 absolute rounded-full  bottom-9 -right-5  p-4 border-1 border-gray-300  transition-all duration-300 ease-in-out invisible font-black' />
                </div>
            </div>

            {/* shield section starts from here */}

            <div className='w-full flex justify-center pb-30 pt-6 '>
                <div className='w-300 h-104.5 flex'>
                    <div className='w-left h-full '>
                        <img className='w-full' src={shieldimage} alt='' />
                    </div>
                    <div className='w-right h-full  px-3.75'>
                        <h1 className='text-5xl font-bold text-gray-900 leading-snug'>Your faithful partners <br /> Medical Goods</h1>
                        <p className='text-gray-500 my-6'>Houzez allow you to design unlimited panels and real estate custom forms <br /> to capture leads and keep record of all information</p>
                        <div className='flex flex-col gap-y-4' >
                            <div className='flex items-center gap-x-3'>
                                <FontAwesomeIcon icon={faSquareCheck} className='text-theme text-3xl' />
                                <p className='text-gray-500'>Better security for patient privacy and information.</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FontAwesomeIcon icon={faSquareCheck} className='text-theme text-3xl' />
                                <p className='text-gray-500'>More products at lower prices.</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FontAwesomeIcon icon={faSquareCheck} className='text-theme text-3xl' />
                                <p className='text-gray-500'>Connect customers with the power of eCommerce at all.</p>
                            </div>
                        </div>
                        <div className='w-full  flex  mt-10 border-t-1 border-gray-300 pt-10'>
                            <div className='flex items-center gap-x-5'>
                                <div className='w-10 rounded-full'>
                                    <img className='w-10 rounded-full' src={author} alt='' />
                                </div>
                                <div className='flex flex-col  pr-6 border-r-2 border-gray-300'>
                                    <h1 className='font-bold text-xl'>Jerry Henson</h1>
                                    <p className='text-gray-600'>Medical Specialist</p>
                                </div>
                            </div>
                            <div className='flex items-center bg-green-100 ml-5 gap-x-5 pl-3 py-3 '>
                                <div className='w-10 rounded-full'>
                                    <img className='w-10 rounded-full' src={callimage} alt='' />
                                </div>
                                <div className='flex flex-col  pr-6 '>
                                    <p className='text-gray-600'>Medical Specialist</p>
                                    <h1 className='font-bold text-normal'>+91 9625597007</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* shield section ends here */}

            {/* offer section starts from here */}

            <div className='w-full px-3.75 flex justify-center items-center mb-20'>
                <div className='w-300 h-offer flex gap-x-7'>
                    <div className='w-4/12 flex justify-center items-center overflow-hidden '>
                        <img className='w-full scale-110 hover:scale-125 duration-3000' src={offer1} alt='' />
                    </div>
                    <div className='w-4/12 flex justify-center items-center overflow-hidden '>
                        <img className='w-full scale-110 hover:scale-125 duration-3000' src={offer2} alt='' />
                    </div>
                    <div className='w-4/12 flex justify-center items-center overflow-hidden '>
                        <img className='w-full scale-110 hover:scale-125 duration-3000 ' src={offer3} alt='' />
                    </div>
                </div>
            </div>


            {/* offer section ends here */}

            {/* featured product section starts from here */}

            <div className='w-full flex justify-center mb-20 mt-26 relative'>
                <h1 className='absolute font-bold text-6xl  -top-15'>Featured Products</h1>
                <div className='w-300 h-featured  flex items-center gap-x-7'>
                    <div className='w-featuredleft h-featuredleft  flex flex-col  '>
                        <div className='w-full h-5/10 mb-5 overflow-hidden '>
                            <img className='w-full  hover:scale-110 duration-3000' src={left1} alt='' />
                        </div>
                        <div className='w-full h-4/6 overflow-hidden'>
                            <img className='w-full hover:scale-110 duration-3000' src={left2} alt='' />
                        </div>
                    </div>
                    <div className='w-featuredright h-featuredleft  '>
                        <div className='w-full h-full  flex flex-col gap-y-10'>
                            <div className='w-full h-3/6  flex gap-x-10'>
                                <div className='w-4/12 h-full  ps1' onMouseOver={pover} onMouseOut={pout}>
                                    <div className='w-full h-8/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span1 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p1} alt='' className='p1 h-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Anticeptic Spray</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                                <div className='w-4/12 h-full  ps2' onMouseOver={pover2} onMouseOut={pout2}>
                                    <div className='w-full h-8/10 overflow-hidden cursor-pointer relative flex justify-center items-center'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span2 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p2} alt='' className='p2 h-full duration-3000' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Digital Stethoscope</h1>
                                        <h1 className='font-semibold '>$25.00  &#160; <span className='text-red-500 line-through'>$35.00</span></h1>
                                    </div>
                                </div>
                                <div className='w-4/12 h-full  ps3' onMouseOver={pover3} onMouseOut={pout3}>
                                    <div className='w-full h-8/10  overflow-hidden cursor-pointer relative flex justify-center items-center'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span3  absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p3} alt='' className='p3 h-full duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer '>Cosmetic Containers</h1>
                                        <h1 className='font-semibold '>$75.00  &#160; <span className='text-red-500 line-through'>$92.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-3/6  flex gap-x-10'>
                                <div className='w-4/12 h-full  ps4' onMouseOver={pover4} onMouseOut={pout4}>
                                    <div className='w-full h-8/10  overflow-hidden cursor-pointer relative flex justify-center items-center'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span4  absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p4} alt='' className='p4 h-full duration-3000' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Cosmetic Containers</h1>
                                        <h1 className='font-semibold '>$78.00  &#160; <span className='text-red-500 line-through'>$85.00</span></h1>
                                    </div>
                                </div>
                                <div className='w-4/12 h-full  ps5' onMouseOver={pover5} onMouseOut={pout5}>
                                    <div className='w-full h-8/10  overflow-hidden cursor-pointer relative flex justify-center items-center'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span5 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p5} alt='' className='p5 h-full duration-3000' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Blue Hand Gloves</h1>
                                        <h1 className='font-semibold '>$150.00  &#160; <span className='text-red-500 line-through'>$180.00</span></h1>
                                    </div>
                                </div>
                                <div className='w-4/12 h-full  ps6' onMouseOver={pover6} onMouseOut={pout6}>
                                    <div className='w-full h-8/10  overflow-hidden cursor-pointer relative flex justify-center items-center'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='span6 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={p6} alt='' className='p6 h-full duration-3000' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1'>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Thermometer Gun</h1>
                                        <h1 className='font-semibold '>$150.00  &#160; <span className='text-red-500 line-through'>$180.00</span></h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* featured product section ends here */}

            {/* banner section starts from here */}

            <div className=' poster w-full h-poster mb-20 z-0 bg-red-500  bg-cover bg-center bg-no-repeat py-pp flex justify-center'>
                <div className='w-300 h-full bg-transparent'>
                    <h2 className='font-bold text-theme'>Todays Hot Offer</h2>
                    <h1 className='text-5xl font-bold mt-4 leading-tight'>Free Covid-19 Vaccine <br />
                        Campaign Ticket</h1>
                    <p className='text-gray-500 mt-7'>Cur tantas regiones barbarorum obiit, tot maria transmist <br />
                        summo bono fruitur id est voluptate barbarorum</p>
                    <div className='flex gap-x-7 mt-7'>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <span className='bg-white p-4 text-2xl font-bold text-theme'>00</span>
                            <h2 className='text-lg text-gray-600'>Days</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <span className='bg-white p-4 text-2xl font-bold text-theme'>00</span>
                            <h2 className='text-lg text-gray-600'>Hrs</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <span className='bg-white p-4 text-2xl font-bold text-theme'>00</span>
                            <h2 className='text-lg text-gray-600'>Mins</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <span className='bg-white p-4 text-2xl font-bold text-theme'>00</span>
                            <h2 className='text-lg text-gray-600'>Secs</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-start mt-14 gap-x-5'>
                        <span className=' bg-red-500 flex justify-center items-center'>
                            <a href="/" className="cta flex justify-center items-center border-1 border-white  px-9 py-4     bg-white text-white  transition-all duration-300 relative hover:text-black hover:border-black overflow-hidden" onMouseOver={Right1} onMouseOut={Left1} >
                                <p className="z-10 text-lg font-semibold">Book Now</p>
                                <span className="ctabg2 absolute w-full h-full bg-theme top-0 left-0 z-0 hover:right-full transition-all duration-300"></span>
                            </a>
                        </span>
                        <a href='/' className='text-theme underline underline-offset-1 text-lg hover:opacity-60 duration-300'> Deal of The Day</a>
                    </div>
                </div>
            </div>
            {/* banner section ends here */}

            {/* leates product section starts from here */}

            <div className='w-full relative flex justify-center mt-26 '>
                <h1 className='absolute font-bold text-6xl  -top-15'>Leatest Products</h1>
                <div className='w-300 h-lph  pt-28 pb-17'>
                    <div className='w-full h-full  flex flex-col gap-y-7'>
                        <div className='w-full h-3/6 flex gap-x-7'>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover} onMouseOut={lpout}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center    overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps1 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp1} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex  flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Fracture Cloth</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover2} onMouseOut={lpout2}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps2 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp2} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Oxygen Mask</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover3} onMouseOut={lpout3}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps3 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp3} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Blue Hand Gloves</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover4} onMouseOut={lpout4}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps4 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp4} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Electric Sanitizer</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-3/6 flex gap-x-7'>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover5} onMouseOut={lpout5}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps5 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp5} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Brain Capsules</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover6} onMouseOut={lpout6}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps6 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp6} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Oxygen Pump</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover7} onMouseOut={lpout7}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps7 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp7} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Digital Thermometer</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-3/12 h-full  hover:shadow-lg hover:shadow-gray-400 duration-500'>
                                <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white duration-300' onMouseOver={lpover8} onMouseOut={lpout8}>
                                    <div className='w-full h-7.5/10 flex justify-center items-center  overflow-hidden cursor-pointer relative'>
                                        <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                        <span className='lps8 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                            <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                            <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                        </span>
                                        <img src={lp8} alt='' className='p1 w-full  duration-3000 ' />
                                    </div>
                                    <div className='w-full h-2.5/10  flex flex-col justify-center gap-y-1 pl-7 pb-7'>
                                        <span className='flex justify-center items-center self-start text-yellow-500 text-sm'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Safety Kit</h1>
                                        <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* leatest product section ends here */}


            {/* poster 2 section starts from here */}

            <div className='w-full flex  mb-20  py-13'>
                <div className='poster2 w-p2l h-p2 bg-gray-100 bg-cover bg-center bg-no-repeat'></div>
                <div className='w-p2r h-p2 bg-gray-100 py-28 pl-20'>
                    <h2 className='font-bold text-theme'>N95 Facial Covering Mask</h2>
                    <h1 className='text-5xl font-bold mt-4 leading-tight'>Grade A Safety Masks For <br /> Sale. Haurry Up!</h1>
                    <p className='text-gray-500 mt-7'>Over 39,000 people work for us in more than 70 countries all overthe world. <br /> This breadth of global coverage, combined with specialist services</p>
                    <div className='flex flex-col'>
                        <div className='flex my-7 gap-x-20'>
                            <div className='flex items-center gap-x-4'>
                                <FontAwesomeIcon icon={faLeaf} className='text-white bg-theme rounded-full p-3 text-xl' />
                                <p className='text-gray-500'>Activated Carbon</p>
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <FontAwesomeIcon icon={faWind} className='text-white bg-theme rounded-full p-3 text-xl' />
                                <p className='text-gray-500'>Breathing Valve</p>
                            </div>
                        </div>
                        <div className='flex gap-x-20'>
                            <div className='flex items-center gap-x-4'>
                                <FontAwesomeIcon icon={faMaskFace} className='text-white bg-theme rounded-full p-3 text-xl' />
                                <p className='text-gray-500'>6 Layer Filteration</p>
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <FontAwesomeIcon icon={faRecycle} className='text-white bg-theme rounded-full p-3 text-xl' />
                                <p className='text-gray-500'>Rewashes & Reusable</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-8'>
                        <a className='underline underline-offset-1 text-lg text-theme my-7 hover:opacity-60 duration-300' href='/'>VIEW PRODUCTS</a>
                    </div>
                </div>
            </div>
            {/* poster 2 section ends here */}


            {/* trending producs section starts from here */}

            <div className='w-full relative flex justify-center mb- py-17'>
                <h1 className='absolute font-bold text-6xl  -top-15'>Trending Products</h1>
                <div className='w-300 h-tp flex gap-x-10'>
                    <div className='w-3/12 h-full hover:shadow-lg shadow-gray-400 duration-500'>
                        <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white   duration-300' onMouseOver={tpover} onMouseOut={tpout}>
                            <div className='w-full h-7.5/10 flex justify-center items-center    overflow-hidden cursor-pointer relative'>
                                <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                <span className='tps1 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                    <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                </span>
                                <img src={lp1} alt='' className='p1 w-full  duration-3000 ' />
                            </div>
                            <div className='w-full h-2.5/10  flex  flex-col justify-center items-center gap-y-2 pl-7 pb-7'>

                                <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Fracture Cloth</h1>
                                <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 h-full hover:shadow-lg shadow-gray-400 duration-500'>
                        <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white   duration-300' onMouseOver={tpover2} onMouseOut={tpout2}>
                            <div className='w-full h-7.5/10 flex justify-center items-center    overflow-hidden cursor-pointer relative'>
                                <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                <span className='tps2 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                    <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                </span>
                                <img src={lp1} alt='' className='p1 w-full  duration-3000 ' />
                            </div>
                            <div className='w-full h-2.5/10  flex  flex-col justify-center items-center gap-y-2 pl-7 pb-7'>

                                <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Fracture Cloth</h1>
                                <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 h-full hover:shadow-lg shadow-gray-400 duration-500'>
                        <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white   duration-300' onMouseOver={tpover3} onMouseOut={tpout3}>
                            <div className='w-full h-7.5/10 flex justify-center items-center    overflow-hidden cursor-pointer relative'>
                                <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                <span className='tps3 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                    <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                </span>
                                <img src={lp1} alt='' className='p1 w-full  duration-3000 ' />
                            </div>
                            <div className='w-full h-2.5/10  flex  flex-col justify-center items-center gap-y-2 pl-7 pb-7'>

                                <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Fracture Cloth</h1>
                                <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/12 h-full hover:shadow-lg shadow-gray-400 duration-500'>
                        <div className='w-full h-full  ps1 border-2 border-gray-200 hover:border-white   duration-300' onMouseOver={tpover4} onMouseOut={tpout4}>
                            <div className='w-full h-7.5/10 flex justify-center items-center    overflow-hidden cursor-pointer relative'>
                                <h1 className='absolute bg-theme text-white right-5 top-5 px-3 py-0.5 font-semibold z-10'>NEW</h1>
                                <span className='tps4 invisible absolute translate-y-17 z-10 shadow-lg flex  justify-center items-center duration-500'>
                                    <FontAwesomeIcon icon={faEye} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faCartShopping} className='bg-white text-gray-500 p-3.5 border-x-1 border-gray-300 hover:text-white hover:bg-theme duration-300' />
                                    <FontAwesomeIcon icon={faHeart} className='bg-white text-gray-500 p-3.5 hover:text-white hover:bg-theme duration-300' />
                                </span>
                                <img src={lp1} alt='' className='p1 w-full  duration-3000 ' />
                            </div>
                            <div className='w-full h-2.5/10  flex  flex-col justify-center items-center gap-y-2 pl-7 pb-7'>

                                <h1 className='font-bold hover:text-theme duration-300 cursor-pointer'>Fracture Cloth</h1>
                                <h1 className='font-semibold '>$32.00  &#160; <span className='text-red-500 line-through'>$46.00</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* trending product section ends here */}


            {/* offer section 2 starts from here */}

            <div className='w-full flex justify-center items-center mb-20'>
                <div className='w-300 h-o2  flex gap-x-7'>
                    <div className='w-4/12 h-full flex justify-center items-center bg-gray-400 overflow-hidden'>
                        <img src={o21} alt='' className='cursor-pointer hover:scale-110 duration-3000' />
                    </div>
                    <div className='w-4/12 h-full flex justify-center items-center bg-gray-400 overflow-hidden'>
                        <img src={o22} alt='' className='cursor-pointer hover:scale-110 duration-3000' />
                    </div>
                    <div className='w-4/12 h-full flex justify-center items-center bg-gray-400 overflow-hidden'>
                        <img src={o23} alt='' className='cursor-pointer hover:scale-110 duration-3000' />
                    </div>
                </div>
            </div>

            {/* offer section ends here */}

            {/* services section starts from here */}


            <div className='w-full flex justify-center items-center mt-10 mb-20 bg-gray-100'>
                <div className='w-300 h-service flex py-7 '>
                    <div className='w-3/12 h-full  flex justify-start items-center pl-7 gap-x-10'>
                        <FontAwesomeIcon icon={faTruckFast} className='text-4xl opacity-80' />
                        <div className='flex flex-col gap-x-3'>
                            <h1 className='text-lg font-bold'>Free shipping</h1>
                            <p className='text-nowrap'>On all orders over $49.00</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full  flex justify-start items-center pl-7 gap-x-10'>
                        <FontAwesomeIcon icon={faSackDollar} className='text-4xl opacity-80' />
                        <div className='flex flex-col gap-x-3'>
                            <h1 className='text-lg font-bold'>15 days returns</h1>
                            <p className='text-nowrap'>Moneyback guarantee</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full  flex justify-start items-center pl-7 gap-x-10'>
                        <FontAwesomeIcon icon={faCreditCard} className='text-4xl opacity-80' />
                        <div className='flex flex-col gap-x-3'>
                            <h1 className='text-lg font-bold'>Secure checkout</h1>
                            <p className='text-nowrap'>Protected by Paypal</p>
                        </div>
                    </div>
                    <div className='w-3/12 h-full  flex justify-start items-center pl-7 gap-x-10'>
                        <FontAwesomeIcon icon={faGift} className='text-4xl opacity-80' />
                        <div className='flex flex-col gap-x-3'>
                            <h1 className='text-lg font-bold'>Offer & gift here</h1>
                            <p className='text-nowrap'>On all orders over</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* services section ends here */}




        </main>
    )

}


export default Main

