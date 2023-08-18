import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Freelancer/Navbar'
import searchIcon from '../../assets/icons/Search2.png'
import thirdProfileIcon from '../../assets/icons/third_profile.png'


const Messages = () => {
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-4/5 mx-6 h-full'>
                <Navbar />
                <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-3  py-0">
                    Messages
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>

                <div className='flex items-center justify-between w-full'>
                    <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)]  bg-white flex flex-col   px-5 py-3 rounded w-1/3">
                        <div className='flex flex-row bg-[#e1edff]  w-full px-4 py-1 rounded items-center'>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" className="bg-transparent w-full ml-3 font-[' Poppins'] text-[#343f42]" />
                        </div>
                        <div className="flex flex-row gap-4 w-full items-center pt-2   ">
                            <img
                                src={thirdProfileIcon}
                                className=""
                            />
                            <div className="flex flex-col w-5/6 gap-1 items-start ">
                                <div className='flex justify-between items-center w-full'>
                                    <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                                        Team: Group Ferran
                                    </p>
                                    <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">12:05pm</p>

                                </div>
                                <div className="flex justify-between items-start w-full">
                                    <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                                        Lorem Ipsum is simply kajns dskjas........
                                    </div>
                                    <div className='bg-[#032b68] p-[0.1rem] rounded-full self-start'>
                                        <div className="text-xs font-['Montserrat'] font-medium text-white">12</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Messages
