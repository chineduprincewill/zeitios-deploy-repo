import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Freelancer/Navbar'
import thirteenthImage from '../../assets/image/thirteenth_picture.png'

const Job = () => {
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-4/5 mx-6 h-full'>
                <Navbar />
                <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-3  py-0">
                    Jobs
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <img src={thirteenthImage} alt="image" className='mx-auto mt-10' />
                <div className="font-['Montserrat'] text-[#323232] mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
                <div className="bg-[#0259db] items-center rounded-sm mt-5 w-1/3 mx-auto flex justify-center p-3 ">
                    <div className="font-['Montserrat'] font-medium text-white">Find Jobs</div>
                </div>
            </div>
        </div>
    )
}

export default Job
