import { useEffect, useState } from 'react';
import "./Script.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Script.js"
import { faArrowDownLong, faCartPlus, faEnvelopeOpenText, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faDribbble, faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import image from "../Assets/healthtech logo/HealthTech-removebg-preview.png"
import { aboutout, aboutover, homeout, homeover, mouseout, mouseover, shopover, shopout, newsover, newsout, pageover, pageout, userover, userout, showSidebar, hideSidebar, Right, Left, Right2, Left2, } from "./Script.js"
import './header.css'





const Header = () => {
    const [active,setActive] = useState('')
    const [navbarActive,setNavbarActive] = useState('')
    useEffect(function(){
        window.addEventListener('scroll',function(){
          //mount, update, unmount

          var a = window.pageYOffset
          if(a>400){
            setActive('activex')
            setNavbarActive('navbarActive')
          }else{
            setActive('')
            setNavbarActive('')
          }
            
          
        })
      },[])
    return (
        <header className={"header w-full flex flex-col justify-center items-center absolute " + active }>
            <div className="w-full h-10  border-b-0.25 border-gray-200 flex justify-center items-center">
                <div className="w-300 h-full  flex justify-between items-center gap-x-5 pl-4 pr-4">
                    <div className="flex gap-x-10">
                        <div className=" flex justify=between items-center">
                            <a className="flex justify-center items-center gap-x-2 text-gray-500 hover:text-theme duration-300" href="/"><FontAwesomeIcon className="text-theme text-sm" icon={faEnvelopeOpenText} /> <p className="font-bold ">info@healthtech</p></a>
                        </div>
                        <div className=" flex justify=between items-center">
                            <a className="flex justify-center items-center gap-x-2 text-gray-500 hover:text-theme duration-300" href="/"><FontAwesomeIcon className="text-theme text-sm" icon={faLocationDot} /> <p className="font-bold ">15/A, Nest Tower, NYC</p></a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-10">
                        <div className="flex justify-center items-center relative">
                            <a className="lang-dropdown py-2 flex justify-center items-center gap-x-2 hover:text-theme duration-300" onMouseOver={mouseover} onMouseOut={mouseout} href="/">
                                <p className="font-semibold">English</p>
                                <FontAwesomeIcon icon={faArrowDownLong} className="text-theme" />
                                {/* dropdown1 starts from here  */}
                                <div className="dropdown1 bg-white w-51 h-62 absolute top-13 right-0 flex-flex-row py-3 text-gray-500  shadow-lg transition-all duration-300 ease-in-out invisible">
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme  transition-all duration-500 ">Hindi</div>
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme transition-all duration-200">Arabic</div>
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme transition-all duration-200">Chinese</div>
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme transition-all duration-200">Bengali</div>
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme transition-all duration-200">French</div>
                                    <div className="white text-left pl-5 py-1.5 hover:text-theme transition-all duration-200">English</div>
                                </div>

                                {/* dropdown1 ends here */}
                            </a>

                        </div>
                        <div className="flex gap-x-4 ">
                            <FontAwesomeIcon icon={faFacebookF} className="text-gray-500  hover:text-theme duration-300" />
                            <FontAwesomeIcon icon={faXTwitter} className="text-gray-500  hover:text-theme duration-300" />
                            <FontAwesomeIcon icon={faInstagram} className="text-gray-500  hover:text-theme duration-300" />
                            <FontAwesomeIcon icon={faDribbble} className="text-gray-500  hover:text-theme duration-300" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full   flex justify-center items-center  py-6">
                <div className={"navbar w-300 h-23 bg-white py-2.5 flex justify-between transition-all duration-500 z-20 " + navbarActive}>
                    <div className="w-53  h-full flex justify-start items-center overflow-hidden">
                        <img className="w-full " src={image} />
                    </div>
                    <div className="flex">
                        <nav className="w-nav h-17  flex justify-center items-center gap-x-5 text-black font-bold">
                            <div>
                                {/* dropdown 2 starts from here */}
                                <a className="homekey px-2.5 py-5 hover:text-theme duration-300 relative" onMouseOver={homeover} onMouseOut={homeout} href="/"><p className="px-2.5 py-5">Home</p>
                                    <div className="homedropdown absolute w-50 h-36 bg-white shadow-lg top-36 border-t-5 border-theme transition-all duration-300 ease-in-out pl-6 py-3 invisible">
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">Home Style 01</div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">Home Style 02</div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">Home Style 03</div>
                                    </div>
                                </a>
                                {/* dropdown 2 ends here */}
                            </div>
                            <div>
                                {/* home dropdown starts from here */}
                                <a className="aboutkey px-2.5 py-5 hover:text-theme duration-300" onMouseOver={aboutover} onMouseOut={aboutout} href="/"><p className="px-2.5 py-5">About</p>
                                    <div className="aboutdropdown absolute w-50 h-auto bg-white shadow-lg top-44 border-t-5 border-theme transition-all duration-300 ease-in-out pl-6 py-3 invisible">
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">About</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Services</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Service Details</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Gallery</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Gallery - 2</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Gallery Details</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Team Details</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">FAQs</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Google Map Location</a>
                                        </div>
                                    </div>
                                </a>
                                {/* home dropdown ends here */}
                            </div>
                            <div>
                                {/* shop dropdown starts from here */}
                                <a className="shopkey px-2.5 py-5 hover:text-theme duration-300" onMouseOver={shopover} onMouseOut={shopout} href="/">
                                    <p className="px-2.5 py-5">Shop</p>
                                    <div className="shopdropdown absolute w-50 h-auto bg-white shadow-lg top-44 border-t-5 border-theme transition-all duration-300 ease-in-out pl-6 py-3 invisible">
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Shop</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Shop Grid</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Shop Left Sidebar</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Shop right Sidebar </a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Shop Details</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">Other pages...</a>
                                        </div>

                                    </div>
                                </a>
                                {/* shop dropdown ends here */}
                            </div>
                            <div>
                                {/* news dropdown starts from here */}
                                <a className=" px-2.5 py-5 hover:text-theme duration-300" onMouseOver={newsover} onMouseOut={newsout} href="/">
                                    <p className="px-2.5 py-5">News</p>
                                    <div className="newsdropdown absolute w-50 h-auto bg-white shadow-lg top-44 border-t-5 border-theme transition-all duration-300 ease-in-out pl-6 py-3 invisible">
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">News</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">News Grid</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">News Left Sidebar</a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">News right Sidebar </a>
                                        </div>
                                        <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                            <a className=" " href="/">News Details</a>
                                        </div>
                                    </div>
                                </a>
                                {/* newsdropdown ends here */}
                            </div>
                            <div>
                                <a className="px-2.5 py-5 hover:text-theme duration-300 relative" onMouseOver={pageover} onMouseOut={pageout} href="/">
                                    <p className="px-2.5 py-5">Pages...</p>
                                    <div className="pagedropdown w-300 h-40 shadow-lg bg-white absolute -right-95 top-36 border-t-5 border-theme transition-all duration-300 ease-in-out pl-6 py-3 invisible"></div>
                                </a>
                            </div>
                            <div>
                                <a className="px-2.5 py-5 hover:text-theme duration-300" href="/">Contact</a>
                            </div>
                        </nav>
                        <div className=" h-17  flex justify-center items-center text-black gap-x-2.5 px-9 ">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="p-4 bg-white shadow-lg hover:text-white hover:bg-theme duration-200" />
                            <a href="/" className="relative" onMouseOver={userover} onMouseOut={userout}>
                                <FontAwesomeIcon icon={faUser} className="p-4 bg-white shadow-lg hover:text-white hover:bg-theme duration-200" />
                                <div className="userdropdown absolute right-0 top-20 w-37 h-auto shadow-lg bg-white pl-6 py-3 transition-all duration-300 ease-in-out invisible">
                                    <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                        <a className=" " href="/">Sign in</a>
                                    </div>
                                    <div className="py-1.5 font-normal text-gray-600 hover:text-theme   transition-all duration-500">
                                        <a className=" " href="/">Register</a>
                                    </div>
                                    <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                        <a className=" " href="/">My Account</a>
                                    </div>
                                    <div className="py-1.5 font-normal text-gray-600 hover:text-theme  transition-all duration-500">
                                        <a className=" " href="/">Wishlist</a>
                                    </div>
                                </div>
                            </a>
                            <FontAwesomeIcon icon={faCartPlus} className="p-4 bg-white shadow-lg hover:text-white hover:bg-theme duration-200" onClick={showSidebar} />
                            <div className="">
                                <div className="cartsidebar fixed bg-white w-96 h-screen top-0 -right-96  transition-all duration-500 linear z-30 p-7 pt-5 pb-17">
                                    <div className="flex items-center justify-between mb-5">
                                    <h1 className="  z-10 top-3 font-bold text-lg text-gray-700">Cart</h1>
                                    <FontAwesomeIcon icon={faXmark} className="text-xl cursor-pointer p-2 hover:text-red-500 duration-300" onClick={hideSidebar} />
                                    </div>
                                    <div className="w-full h-7/10  overflow-y-auto relative pt-4 border-t-0.25 border-gray-300 flex justify-center items-center text-gray-500">
                                    <h1>No Items in your cart Yet!</h1>
                                    </div>
                                    <div className="flex justify-between items-center py-5  my-5 border-y-0.25 gray-400">
                                        <h1 className="font-bold text-gray-800 text-lg">Subtotal:</h1>
                                        <h1 className="font-bold text-theme text-lg ">$0</h1>

                                    </div>
                                    <div className="flex  justify-between   items-center">
                                        <a href="/" className="viewcart flex justify-center items-center border-1 border-white    px-9 py-4  bg-white text-white  transition-all duration-300 relative hover:text-black hover:border-black overflow-hidden" onMouseOver={Right} onMouseOut={Left} >
                                            <p className="z-10">VIEW CART</p>
                                            <span className="viewcartbg absolute w-full h-full bg-theme top-0 left-0 z-0 hover:right-full transition-all duration-300"></span>
                                        </a>
                                        <a href="/" className="viewcart flex justify-center items-center border-1 border-white    px-9 py-4  bg-white text-white  transition-all duration-300 relative hover:text-black hover:border-black overflow-hidden" onMouseOver={Left2} onMouseOut={Right2} >
                                            <p className="z-10">VIEW CART</p>
                                            <span className="checkoutbg absolute w-full h-full bg-black top-0 left-0 z-0  transition-all duration-300"></span>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-6 text-gray-600">
                                        <p>Free Shipping on All Orders Over $100!</p>
                                    </div>
                                </div>
                                <div className="sidebarOverlay hidden absolute w-screen h-screen bg-black opacity-50 left-0 top-0 -z-20 transition-all duration-700 ease-in-out " onClick={hideSidebar}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}
export default Header