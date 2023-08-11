import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import firstPicture from '../assets/image/first_picture.png'
import secondPicture from '../assets/image/second_picture.png'
import thirdPicture from '../assets/image/third_picture.png'
import Logo from '../assets/logo/Logo.png'
import fifthPicture from '../assets/image/fifth_picture.png'
import sixthPicture from '../assets/image/sixth_picture.png'
import seventhPicture from '../assets/image/seventh_picture.png'
import ninthPicture from '../assets/image/ninth_picture.png'
import tenthPicture from '../assets/image/tenth_picture.png'
import eleventhPicture from '../assets/image/eleventh_picture.png'
import starIcon from '../assets/icons/star_icon.png'
import googleIcon from '../assets/icons/Google.png'
import microsoftIcon from '../assets/icons/Microsoft.png'
import figmaIcon from '../assets/icons/Figma.png'
import adobeIcon from '../assets/icons/Adobe.png'
import rubyIcon from '../assets/icons/Ruby.png'
import quotes from '../assets/icons/quotes.png'
import bagIcon from '../assets/icons/bag.png'
import profileIcon from '../assets/icons/profile.png'
import boxIcon from '../assets/icons/box.png'
import facebookIcon from '../assets/icons/facebook.png'
import twitterIcon from '../assets/icons/twitter.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import { RiFacebookFill } from 'react-icons/ri'
const Home = () => {
    const [data, setData] = useState({ name: '', email: '', phoneNumber: '', message: '' })
    return (
        <div>

            <div className="h-full w-full pb-20  bg-home bg-dark bg-blend-multiply ">
                <Navbar />
                <h1 className="text-center text-white md:text-4xl text-2xl  font-bold mt-20">Find the best Freelance service for your business</h1>
                <p className="text-center text-white md:text-lg text-sm ">Work with talented people and see your ideas turn into reality</p>
                <div className=" w-2/3 md:w-1/3  mx-auto flex justify-between  items-center mt-20">
                    <button className="text-white bg-primary md:p-3 p-2 rounded-lg">Hire a team</button>
                    <button className="text-white border border-white md:p-3 p-2 rounded-lg">Hire a freelancer</button>
                </div>
                <div className="bg-basic w-full p-4 flex-wrap text-white mt-24 flex items-center justify-around align-self-bottom">
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">52k</h1>
                        <p className="text-lg">Total Freelancer</p>
                    </div>
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">50k</h1>
                        <p className="text-lg">Positive review</p>
                    </div>
                    <div className="px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">35k</h1>
                        <p className="text-lg">Project Recieved</p>
                    </div>
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">350k</h1>
                        <p className="text-lg">Project Completed</p>
                    </div>
                </div>

            </div>
            <div className=" w-full pt-10 pb-20">
                <h1 className="text-center font-bold text-3xl">About Zeitious</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud </p>
                <div className="w-2/3 max-lg:w-5/6 max-sm:w-full max-md:w-5/6 max-sm:flex-col  p-4 flex justify-around items-center mx-auto mt-10">
                    <div className="w-2/5 max-sm:w-5/6  max-sm:mb-5 ">
                        <img src={firstPicture} alt="" className="object-cover max-sm:w-full  " />
                    </div>
                    <div className="w-1/2 2xl:w-2/5 max-lg:w-1/2 max-sm:w-5/6 max-md:w-1/2  text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mx-auto p-4">
                    <h1 className="font-bold text-3xl">Browse Jobs</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm">Know your worth and find the job that qualifies your life</p>
                        <p className=" text-primary"><a href="/">Browse All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex flex-wrap justify-between items-stretch p-4 max-sm:p-2 ">
                    <div className=" flex justify-between  w-2/5 max-sm:w-full max-md:w-5/12  p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className=' '>
                            <div className='rounded-full p-4 bg-lighterGray'>
                                <img src={googleIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className=" font-medium text-xl text-lightGray">Web Developer</h2>
                                <p>Google</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full w-2/5 max-md:w-5/12 p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className='rounded-full p-4 bg-lightOrange'>
                                <img src={microsoftIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Microsoft</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full max-md:w-5/12  w-2/5 p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className='rounded-full p-4 bg-lighterGray'>
                                <img src={googleIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Google</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full max-md:w-5/12  w-2/5 p-6 shadow-2xl max-sm:px-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className='rounded-full p-4 bg-lightOrange'>
                                <img src={microsoftIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Microsoft</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' bg-blue-100 w-full'>
                <div className="w-11/12 mx-auto p-4">
                    <h1 className="font-bold text-3xl">Trending Services</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm">Most viewed and all-time rendered services</p>
                        <p className=" text-primary"><a href="/">View All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex max-md:flex-wrap justify-between items-stretch p-4 max-sm:p-2 ">
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12 bg-white  shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={ninthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className=' my-2 max-sm:my-5 text-lightGray px-3'>Web & App Design</div>
                        <div className=' my-2 max-sm:my-5  px-3'>I will design a creative modern websites in figma</div>
                        <div className="w-full  flex justify-between items-center mt-5 px-3">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray pr-2">4.51 </span>  42 reviews</p></div>

                        </div>
                        <div className='flex w-full items-center justify-between my-3 px-3'>
                            <div className='w-1/2 flex items-start justify-start'>
                                <div className='rounded-full w-6 h-4'>
                                    <img src={secondPicture} alt="image" />
                                </div>
                                <div>15 articles</div>
                            </div>
                            <div className='w-1/2 text-end text-lightGray'>Starting at <span className='text-darkGray'>$123</span> </div>
                        </div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12 bg-white  shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={tenthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className=' my-2 max-sm:my-5 text-lightGray px-3'>Illustration Design</div>
                        <div className=' my-2 max-sm:my-5  px-3'>I will design a creative modern websites in figma</div>
                        <div className="w-full  flex justify-between items-center mt-5 px-3 ">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray pr-2">4.51 </span>  42 reviews</p></div>

                        </div>
                        <div className='flex w-full items-center justify-between my-3 px-3'>
                            <div className='w-1/2 flex items-start justify-start'>
                                <div className='rounded-full w-6 h-4'>
                                    <img src={secondPicture} alt="image" />
                                </div>
                                <div>15 articles</div>
                            </div>
                            <div className='w-1/2 text-end text-lightGray'>Starting at <span className='text-darkGray'>$123</span> </div>
                        </div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12 bg-white  shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={eleventhPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className=' my-2 max-sm:my-5 text-lightGray px-3'>Web Development</div>
                        <div className=' my-2 max-sm:my-5  px-3'>I will design a creative modern websites in figma</div>
                        <div className="w-full  flex justify-between items-center mt-5 px-3 ">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray pr-2">4.51 </span>  42 reviews</p></div>

                        </div>
                        <div className='flex w-full items-center justify-between my-3 px-3'>
                            <div className='w-1/2 flex items-start justify-start'>
                                <div className='rounded-full w-6 h-4'>
                                    <img src={secondPicture} alt="image" />
                                </div>
                                <div>15 articles</div>
                            </div>
                            <div className='w-1/2 text-end text-lightGray'>Starting at <span className=' text-darkGray'>$123</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mx-auto p-4">
                    <h1 className="font-bold text-3xl">Higest Rated Freelancers</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        <p className=" text-primary"><a href="/">Browse All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex flex-wrap justify-between items-stretch p-4 max-sm:p-2 ">
                    <div className="   w-2/5 max-sm:w-full max-md:w-5/12  p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className="w-1/3 text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className="w-1/3 text-center">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className="w-1/3 text-end">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-5/12  p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className="w-1/3 text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className="w-1/3 text-center">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className="w-1/3 text-end">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-5/12  p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className="w-1/3 text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className="w-1/3 text-center">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className="w-1/3 text-end">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-5/12  p-6 shadow-2xl max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className="w-1/3 text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className="w-1/3 text-center">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className="w-1/3 text-end">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full text-center mt-10'>
                    <h2 className="text-3xl font-medium">Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                </div>
                <div className="w-full text-center flex flex-col items-center mt-10">
                    <div><img src={quotes} alt="quotes" /></div>
                    <div className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className="w-full text-center mt-10">
                    <p>Osaze Michael</p>
                    <p className="text-sm">Client</p>
                </div>
                <div className="flex items-center justify-around w-2/5 max-md:w-2/3 max-sm:w-full max-lg:w-1/2 mt-10 mx-auto mb-16">
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                </div>
            </div>
            <div className="w-full relative">
                <div className='bg-lightPink w-2/3 max-lg:w-11/12  max-sm:w-full pt-16 pb-96 z-2 absolute top-0 left-0  pl-16 max-lg:pl-8'>
                    <div>
                        <h2 className="font-bold text-3xl ">Need something done?</h2>
                        <p className=' max-lg:w-1/2 max-sm:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>

                </div>
                <div className='absolute right-0 top-10 w-[36rem] max-lg:w-80 max-md:w-64 max-xl:w-[28rem] max-lg:h-[30rem] max-lg:top-6 h-[28rem] max-sm:w-0 max-sm:h-0 z-20 cursor-pointer bg-transparent bg-fourthPicture bg-blend-multiply'>

                    {/* <img src={fourthPicture} alt="" className='object-cover' /> */}
                </div>
                <div className="flex  max-md:flex-wrap max-lg:flex-wrap  items-center justify-between w-7/12 max-lg:w-5/6 max-sm:w-11/12 mt-10
                absolute left-16 max-lg:left-8 top-32 max-lg:top-32 max-sm:top-28 z-30 cursor-pointer">
                    <div className="pt-5 shadow-2xl px-4 bg-white w-1/4   max-lg:w-3/10 max-lg:mb-5 ">
                        <img src={bagIcon} alt="icon" />
                        <div className='mt-5'>
                            <p className='text-lg mb-5 font-semibold'>Post a Job</p>
                            <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    <div className="pt-5 shadow-2xl px-4  bg-white w-1/4  max-lg:w-3/10 max-lg:mb-5   ">
                        <img src={profileIcon} alt="icon" />
                        <div className='mt-5'>
                            <p className='text-lg font-semibold mb-5'>Choose Freelancer</p>
                            <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    <div className="pt-5 shadow-2xl px-4 bg-white w-1/4  max-lg:w-3/10 max-lg:mb-5  ">
                        <img src={boxIcon} alt="icon" />
                        <div className='mt-5'>
                            <p className='text-lg font-semibold mb-5'>Pay safely</p>
                            <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full mt-[40rem]">
                <div className="w-11/12 mx-auto p-4">
                    <h1 className="font-bold text-3xl">Our Blog</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        <p className=" text-primary"><a href="/">View All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex max-md:flex-wrap justify-between items-stretch p-4 max-sm:p-2 ">
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12   shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={fifthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-lightGray'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5  text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12   shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border '>
                            <img src={sixthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-lightGray'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5  text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-5/12   shadow-2xl  mb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={seventhPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-lightGray'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5 text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>



                </div>
            </div>
            <div className='w-full bg-lightPink pt-5 px-10 max-sm:px-5 pb-16'>
                <div className=''>
                    <h1 className="font-bold text-3xl"> Contact Us</h1>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                </div>
                <div className='w-full flex items-center justify-between mt-10'>
                    <form className=' bg-white w-4/9 max-sm:w-full  flex flex-col items-center shadow-2xl'>
                        <div className='flex flex-col justify-center w-5/8 py-3'>
                            <label>Name</label>
                            <input type="text" id="name" value={data.name} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='border border-black bg-transparent' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 py-3'>
                            <label>Email</label>
                            <input type="text" id="email" value={data.email} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='border border-black bg-transparent' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 py-3'>
                            <label>Phone Number</label>
                            <input type="text" id="phoneNumber" value={data.phoneNumber} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='border border-black bg-transparent' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 py-3'>
                            <label>Message</label>
                            <textarea rows="4" id="message" value={data.message} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='border border-black bg-transparent' />
                        </div>
                        <div className='py-5 w-5/8'>
                            <button className='bg-darkBlue text-white text-center w-full py-2 '> Submit</button>
                        </div>
                    </form>
                    <div className=' bg-lighterGray bg-eighthPicture bg-blend-multiply w-4/9 h-80 max-sm:h-0 max-sm:w-0'></div>
                </div>
            </div>
            <div className=' bg-darkerBlue w-full px-5 pt-10'>
                <div className=" w-full flex justify-center items-center flex-col">
                    <h1 className="text-4xl font-semibold text-white text-center">Subscribe to our Newsletter</h1>
                    <div className=" mb-8 text-white text-center">Get timely updates from your favourite products</div>
                    <form className=" w-1/3 bg-white  flex items-center p-2 rounded-md">
                        <input id="text" type="text" placeholder="your email address" className="bg-transparent w-5/6" />
                        <button className="rounded-md w-1/4 text-white py-2 flex items-center justify-center bg-darkBlue"> Send</button>
                    </form>
                </div>
                <div className="flex max-sm:flex-wrap justify-between  w-full pt-10 pb-20 mt-10 text-white px-5 border">
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col ">
                        <h1 className="font-medium text-lg mb-4  ">Navigation</h1>
                        <div className="flex flex-col">
                            <div className=""> Home</div>
                            <div className=""> About Us</div>
                            <div className=""> What We Do </div>
                            <div className=""> To The Power of 10</div>
                            <div className=""> Donate</div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col  ">
                        <h1 className="font-medium text-lg mb-4 ">What We Do</h1>
                        <div className="flex  flex-col">
                            <div className=""> Web & App Development</div>
                            <div className=""> UI/UX Design</div>
                            <div className=""> Graphics Design </div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col ">
                        <h1 className="font-medium text-lg mb-4 ">Categories</h1>
                        <div className="flex flex-col">
                            <div className=""> Jobs</div>
                            <div className=""> Freelancer</div>
                            <div className=""> Team</div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col ">
                        <h1 className="font-medium text-lg mb-4 ">Support</h1>
                        <div className="flex  flex-col">
                            <div className=""> support@zeitios.com</div>
                            <div className="">  +66 2399 1145</div>
                            <div className=""> Contact Us</div>
                            <div className=""> Facebook</div>
                            <div className=""> Linkedin</div>
                            <div className=""> Twitter</div>

                        </div>

                    </div>

                </div>
                <div className='flex justify-between items-center w-full py-10 px-10 border-t border-white'>
                    <div className='w-1/3'><img src={Logo} alt="" /></div>
                    <div className='w-1/3 text-white'>© 2023 Zeitios. All Rights Reserved. </div>
                    <div className='w-1/3 flex items-center justify-around'>
                        <div className='rounded-full p-3 border border-white text-white'>
                            {/* <img src={facebookIcon} alt="" className='' /> */}
                            < RiFacebookFill />

                        </div>
                        <div className='rounded-full p-3 border border-white'>
                            <img src={twitterIcon} alt="" />
                        </div>
                        <div className='rounded-full p-3 border border-white'>
                            <img src={linkedinIcon} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
