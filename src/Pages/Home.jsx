import React from 'react'
import Navbar from '../Components/Navbar'
import firstPicture from '../assets/image/first_picture.png'

const Home = () => {
    return (<div>
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
        <div className="h-full w-full pt-10 pb-20">
            <h1 className="text-center font-bold text-2xl">About Zeitious</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud </p>
            <div className="w-2/3 max-lg:w-5/6 h-full max-sm:w-full max-md:w-5/6 max-sm:flex-col  p-4 flex justify-around border items-center mx-auto mt-10">
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
    </div>

    )
}

export default Home
