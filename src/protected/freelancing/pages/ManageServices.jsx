import React from 'react'
import Sidebar from '../../../common/Sidebar'
import { Link } from 'react-router-dom'
import fourteenthImage from '../../../assets/image/fourteenth_picture.png'
import icon from '../../../assets/icons/circle_plus_icon.png'

const ManageServices = () => {
    return (
        <div className='w-full min-h-screen flex bg-[#F5F5F5] pb-5'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[75%] h-full mx-6 max-md:w-full max-md:mx-0 ml-auto'>
                <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-20  py-0 max-md:px-2 max-md:text-center">
                    Manage Services
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:px-2 max-md:text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <img src={fourteenthImage} alt="image" className='mx-auto mt-5 max-md:mt-5' />
                <div className="font-['Montserrat'] text-[#323232] mt-5 max-md:mt-2 text-center max-md:px-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
                <Link to="/jobs/all">
                    <button className="bg-[#0259db] items-center rounded-sm mt-5 max-md:mt-2 px-4 mx-auto flex justify-center p-3 ">
                        <img src={icon} />
                        <p className="font-['Montserrat'] font-medium text-white ml-2">Add service</p>
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default ManageServices
