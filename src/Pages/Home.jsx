import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div className="h-screen w-full  bg-home bg-dark bg-blend-multiply ">
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
    )
}

export default Home
