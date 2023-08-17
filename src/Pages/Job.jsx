import React from 'react'
import Logo from '../assets/logo/Logo.png'
import dashboardIcon from '../assets/icons/dashboard_icon.png'
import jobIcon from '../assets/icons/job_icon.png'
import messageIcon from '../assets/icons/message_icon.png'
import reviewIcon from '../assets/icons/review_icon.png'
import payoutIcon from '../assets/icons/payout_icon.png'
import statementIcon from '../assets/icons/statement_icon.png'
import servicesIcon from '../assets/icons/manage_services_icon.png'
import projectIcon from '../assets/icons/manage_project_icon.png'
import profileIcon from '../assets/icons/profile_icon.png'
import logoutIcon from '../assets/icons/logout_icon.png'
import manageIcon from '../assets/icons/manage_project_icon2.png'
import searchIcon from '../assets/icons/Search2.png'
import mailIcon from '../assets/icons/mail.png'
import bellIcon from '../assets/icons/bell.png'
import secondProfileIcon from '../assets/icons/second_profile.png'
import dropdownIcon from '../assets/icons/dropdown.png'
import thirteenthImage from '../assets/image/thirteenth_picture.png'

const Job = () => {
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            <div className="w-1/5 flex flex-col px-5 bg-primary h-full justify-center font-normal text-sm font-['Montserrat'] ">
                <div className='w-full'>
                    <div className='flex pl-8  items-center mt-5 mb-10'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='text-white flex justify-start py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={dashboardIcon} alt="dashboard" className='mr-3 h-4 w-4 text-white' />
                        Dashboard
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={jobIcon} alt="jobs" className='mr-3 h-4 w-4' />
                        Jobs
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={messageIcon} alt="message" className='mr-3 h-4 w-4' />
                        Messages
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={reviewIcon} alt="message" className='mr-3 h-4 w-4' />
                        Reviews
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={payoutIcon} alt="message" className='mr-3 h-4 w-4' />
                        Payouts
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                        <img src={statementIcon} alt="message" className='mr-3 h-4 w-4' />
                        Statement
                    </div>
                </div>
                <div>
                    <div className='mt-7'>
                        <p className='mb-2 text-xs text-gray-300 '>Organize and manage</p>
                        <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                            <img src={servicesIcon} alt="message" className='mr-3 h-4 w-4' />
                            Manage Services
                        </div>
                        <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary  px-2'>
                            <img src={manageIcon} alt="message" className='mr-3 h-4 w-4' />
                            Manage Projects
                        </div>

                    </div>
                    <div className='mt-7'>
                        <p className='mb-2 text-xs  text-gray-300'>Account</p>
                        <div className='text-white flex justify-start py-2 rounded-md hover:bg-white hover:text-primary px-2'>
                            <img src={profileIcon} alt="message" className='mr-3 h-4 w-4' />
                            My profile
                        </div>
                        <div className='text-white flex justify-start  py-2  px-2 rounded-md hover:bg-white hover:text-primary'>
                            <img src={logoutIcon} alt="message" className='mr-3 h-4 w-4' />
                            Logout
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-6 h-full'>
                <div className='  border bg-primary flex flex-row h-1/10 items-center pl-20 pr-6  justify-between rounded-sm'>
                    <div className='flex flex-row bg-[#dfe1e3] w-1/3 px-4 py-1 rounded-[20px] items-center'>
                        <img src={searchIcon} alt="search icon" />
                        <input placeholder="Search" name="search" className="ml-3 bg-transparent font-[' Poppins'] text-[#343f42]" />
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={bellIcon} alt="search icon" />
                        <img src={mailIcon} alt="search icon" />
                        <div className='text-white text-center'>
                            <p className="text-xs font-[' Poppins']">User</p>
                            <p className="text-xs font-[' Poppins']">Osaze Mike</p>
                        </div>
                        <div className=' flex'>
                            <img src={secondProfileIcon} alt="search icon" />
                            <div className=' h-full self-center ml-1'>
                                <img src={dropdownIcon} alt="search icon" className=' self-center ' />
                            </div>

                        </div>
                    </div>
                </div>
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
