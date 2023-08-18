import React from 'react'
import Logo from '../assets/logo/Logo.png'
import dashboardIcon from '../assets/icons/dashboard_icon.png'
import jobIcon from '../assets/icons/job_icon.png'
import secondJobIcon from '../assets/icons/second_job_icon.png'
import messageIcon from '../assets/icons/message_icon.png'
import secondMessageIcon from '../assets/icons/second_message_icon.png'
import reviewIcon from '../assets/icons/review_icon.png'
import secondReviewIcon from '../assets/icons/second_review_icon.png'
import payoutIcon from '../assets/icons/payout_icon.png'
import secondPayoutIcon from '../assets/icons/second_payout_icon.png'
import statementIcon from '../assets/icons/statement_icon.png'
import secondStatementIcon from '../assets/icons/second_statement_icon.png'
import servicesIcon from '../assets/icons/manage_services_icon.png'
import secondServicesIcon from '../assets/icons/second_manage_services_icon.png'
import projectIcon from '../assets/icons/manage_project_icon.png'
import profileIcon from '../assets/icons/profile_icon.png'
import profileIcon2 from '../assets/icons/second_profile_icon.png'
import logoutIcon from '../assets/icons/logout_icon.png'
import manageIcon from '../assets/icons/manage_project_icon2.png'
import secondDashboardIcon2 from '../assets/icons/dash.png'

const Sidebar = ({ handleClick }) => {
    return (
        <div className="w-1/5 flex flex-col px-5 max-lg:px-2 max-lg:text-[10px] max-md:px-5 max-md:text-sm max-sm:text-xs max-sm:px-2 bg-primary h-full  font-normal text-sm  font-['Montserrat'] max-md:w-1/2 max-md:fixed max-md:z-10">
            <div className='w-full h-1/3 flex-col flex justify-between'>
                <div className='flex pl-8  items-center my-10'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick} >

                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-2 left-0 px-2 '>
                        <img src={secondDashboardIcon2} alt="dashboard" className='mr-3 h-4 w-4 ' />
                        <p className=''>Dashboard</p>
                    </div>

                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={dashboardIcon} alt="dashboard" className='mr-3 h-4 w-4 ' />
                        <p className=''>Dashboard</p>
                    </div>


                </div>
                <div className='text-white flex  py-4 rounded-md px-2 relative  group' onClick={handleClick}>
                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-2 left-0 px-2 '>
                        <img src={jobIcon} alt="jobs" className='mr-3 h-4 w-4' />
                        Jobs
                    </div>
                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={secondJobIcon} alt="jobs" className='mr-3 h-4 w-4 ' />
                        <p className=''>Jobs</p>
                    </div>
                </div>
                <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick}>
                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                        <img src={messageIcon} alt="message" className='mr-3 h-4 w-4' />
                        Messages
                    </div>
                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={secondMessageIcon} alt="message" className='mr-3 h-4 w-4 ' />
                        <p className=''>Messages</p>
                    </div>
                </div>
                <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick}>
                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                        <img src={reviewIcon} alt="review" className='mr-3 h-4 w-4' />
                        Reviews
                    </div>

                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={secondReviewIcon} alt="review" className='mr-3 h-4 w-4 ' />
                        <p className=''>Reviews</p>
                    </div>
                </div>
                <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick}>
                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                        <img src={payoutIcon} alt="payout" className='mr-3 h-4 w-4' />
                        Payouts
                    </div>

                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={secondPayoutIcon} alt="payout" className='mr-3 h-4 w-4' />
                        <p className=''>Payouts</p>
                    </div>
                </div>
                <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick}>
                    <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                        <img src={statementIcon} alt="statement" className='mr-3 h-4 w-4' />
                        Statement
                    </div>
                    <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                        <img src={secondStatementIcon} alt="statement" className='mr-3 h-4 w-4' />
                        <p className=''>Statement</p>
                    </div>

                </div>
            </div>
            <div>
                <div className='mt-28 h-1/3 flex flex-col justify-between '>
                    <p className='mb-2 text-xs text-gray-300 '>Organize and manage</p>
                    <div className='text-white flex  rounded-md px-2 py-4 relative  group' onClick={handleClick}>
                        <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                            <img src={servicesIcon} alt="services" className='mr-3 h-4 w-4' />
                            Manage Services
                        </div>
                        <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                            <img src={secondServicesIcon} alt="services" className='mr-3 h-4 w-4' />
                            <p className=''>Manage Services</p>
                        </div>
                    </div>
                    <div className='text-white flex justify-start  py-2 rounded-md hover:bg-white hover:text-primary  px-2' onClick={handleClick}>
                        <img src={manageIcon} alt="message" className='mr-3 h-4 w-4' />
                        Manage Projects
                    </div>

                </div>
                <div className='mt-10 h-1/3 flex flex-col justify-around '>
                    <p className='mb-2 text-xs  text-gray-300'>Account</p>
                    <div className='text-white flex  rounded-md px-2 py-4  relative  group' onClick={handleClick}>
                        <div className='opacity-100 bg-transparent flex hover:opacity-0 absolute top-0 pt-2 left-0 px-2 '>
                            <img src={profileIcon} alt="my profile" className='mr-3 h-4 w-4' />
                            My profile
                        </div>

                        <div className='opacity-0 bg-white flex hover:opacity-100 text-primary absolute top-0 left-0 px-2 pt-2 w-full h-full rounded-md'>
                            <img src={profileIcon2} alt="my profile" className='mr-3 h-4 w-4' />
                            <p className=''>My profile</p>
                        </div>
                    </div>
                    <div className='text-white flex justify-start  py-2  px-2 rounded-md hover:bg-white hover:text-primary' onClick={handleClick}>
                        <img src={logoutIcon} alt="message" className='mr-3 h-4 w-4' />
                        Logout
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
