import React from 'react'
import Navbar from '../Components/Navbar'
import firstPicture from '../assets/image/first_picture.png'
import secondPicture from '../assets/image/second_picture.png'
import thirdPicture from '../assets/image/third_picture.png'
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
const Home = () => {
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
                <div className="w-2/3 max-lg:w-5/6 max-sm:w-full max-md:w-5/6 max-sm:flex-col  p-4 flex justify-around border items-center mx-auto mt-10">
                    <div className="w-2/5 max-sm:w-5/6  max-sm:mb-5   border">
                        <img src={firstPicture} alt="" className="object-cover max-sm:w-full  " />
                    </div>
                    <div className="w-1/2 2xl:w-2/5 max-lg:w-1/2 max-sm:w-5/6 max-md:w-1/2  text-center border">
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
                        <div className='1/4'>
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
                        <div className='1/4'>
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
                        <div className='1/4'>
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
                        <div className='1/4'>
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
                <div className="flex items-center justify-around w-1/2 max-md:w-2/3 max-sm:w-full mt-10 mx-auto mb-10">
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                </div>
            </div>
            <div className="w-full ">
                <div className='bg-lightPink w-2/3 pt-10 pb-32  pl-10'>
                    <div>
                        <h2 className="font-bold text-3xl">Need something done?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>
                    <div className="flex items-center justify-between w-full mt-10">
                        <div className="pt-5 shadow-2xl px-4 bg-white w-1/4">
                            <img src={bagIcon} alt="icon" />
                            <div className='mt-5'>
                                <p className='text-lg mb-5 font-semibold'>Post a Job</p>
                                <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        <div className="pt-5 shadow-2xl px-4  bg-white w-1/4">
                            <img src={profileIcon} alt="icon" />
                            <div className='mt-5'>
                                <p className='text-lg font-semibold mb-5'>Choose Freelancer</p>
                                <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        <div className="pt-5 shadow-2xl px-4 bg-white w-1/4">
                            <img src={boxIcon} alt="icon" />
                            <div className='mt-5'>
                                <p className='text-lg font-semibold mb-5'>Pay safely</p>
                                <p className=' mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default Home
