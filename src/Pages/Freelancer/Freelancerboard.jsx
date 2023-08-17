import React from 'react'
import Logo from '../../assets/logo/Logo.png'
import dashboardIcon from '../../assets/icons/dashboard_icon.png'
import jobIcon from '../../assets/icons/job_icon.png'
import secondJobIcon from '../../assets/icons/second_job_icon.png'
import messageIcon from '../../assets/icons/message_icon.png'
import secondMessageIcon from '../../assets/icons/second_message_icon.png'
import reviewIcon from '../../assets/icons/review_icon.png'
import secondReviewIcon from '../../assets/icons/second_review_icon.png'
import payoutIcon from '../../assets/icons/payout_icon.png'
import secondPayoutIcon from '../../assets/icons/second_payout_icon.png'
import statementIcon from '../../assets/icons/statement_icon.png'
import secondStatementIcon from '../../assets/icons/second_statement_icon.png'
import servicesIcon from '../../assets/icons/manage_services_icon.png'
import secondServicesIcon from '../../assets/icons/second_manage_services_icon.png'
import projectIcon from '../../assets/icons/manage_project_icon.png'
import profileIcon from '../../assets/icons/profile_icon.png'
import profileIcon2 from '../../assets/icons/second_profile_icon.png'
import logoutIcon from '../../assets/icons/logout_icon.png'
import manageIcon from '../../assets/icons/manage_project_icon2.png'
import searchIcon from '../../assets/icons/Search2.png'
import mailIcon from '../../assets/icons/mail.png'
import bellIcon from '../../assets/icons/bell.png'
import secondProfileIcon from '../../assets/icons/second_profile.png'
import thirdProfileIcon from '../../assets/icons/third_profile.png'
import dropdownIcon from '../../assets/icons/dropdown.png'
import firstDashboardIcon from '../../assets/icons/first_dashboard_icon.png'
import secondDashboardIcon from '../../assets/icons/second_dashboard_icon.png'

import thirdDashboardIcon from '../../assets/icons/third_dashboard_icon.png'
import fourthDashboardIcon from '../../assets/icons/fourth_dashboard_icon.png'
import fifthDashboardIcon from '../../assets/icons/fifth_dashboard_icon.png'
import googleIcon from '../../assets/icons/Google.png'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Freelancer/Navbar'


const Freelancerboard = () => {
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            <Sidebar />

            <div className='w-4/5 mx-6 h-full'>
                <Navbar />
                <p className="text-2xl font-['Montserrat'] font-medium text-[#323232] w-full mt-3  py-0">
                    Welcome back, Osaze
                </p>
                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className="flex flex-row justify-between w-full mt-2 h-1/5">
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9  bg-[#c00e3a] px-2 py-3 rounded-lg flex flex-col justify-between">
                        <p className="text-lg font-['Poppins'] font-medium  text-white">
                            Number of <br />
                            Projects
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-lg font-['Poppins'] font-semibold text-white ml-0">
                                1000
                            </p>
                            <img src={firstDashboardIcon} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9 overflow-hidden bg-[#049f6d]  px-2 py-3 rounded-lg flex flex-col justify-between">
                        <p className="text-lg font-['Poppins'] font-medium text-white">
                            Number of <br />
                            Completed Projects
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-lg font-['Poppins'] font-semibold text-white ml-0">
                                1000
                            </p>
                            <img src={secondDashboardIcon} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9 overflow-hidden bg-[#a8a108]  px-2 py-3 rounded-lg flex flex-col justify-between">
                        <p className="text-lg font-['Poppins'] font-medium  text-white">
                            Number of Running <br />
                            Projects
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-lg font-['Poppins'] font-semibold text-white ml-0">
                                1000
                            </p>
                            <img src={thirdDashboardIcon} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9 overflow-hidden bg-[#981010]  px-2 py-3 rounded-lg flex flex-col justify-between">
                        <p className="text-lg font-['Poppins'] font-medium  text-white">
                            Total Payment
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="text-lg font-['Poppins'] font-semibold text-white ml-0">
                                $1000
                            </p>
                            <img src={fourthDashboardIcon} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                </div>
                <div className='flex w-full mt-3 h-6/11 justify-between'>
                    <div className='w-7/11 h-full '>
                        <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)]  bg-[#2d7f04] flex flex-col justify-between h-2/5 px-2 py-3 rounded-lg">
                            <p className="text-lg font-['Poppins'] font-medium  text-white">
                                Payment Balance
                            </p>
                            <div className="flex flex-row ml-px gap-px items-center justify-between mb-2">
                                <p className="text-lg font-['Poppins'] font-semibold text-white">
                                    $1000
                                </p>
                                <img
                                    src={fifthDashboardIcon}
                                    className='w-6 h-6'
                                />
                            </div>
                        </div>
                        <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] bg-white flex w-full rounded-md mt-2 pb-4">
                            <div className='w-1/4 flex justify-center pt-3'>
                                <div className='rounded-full p-4 bg-blue-100 self-start'>
                                    <img src={googleIcon} alt="icon" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start  w-3/4">
                                <div>
                                    <p className="text-2xl font-['Montserrat'] font-medium text-[#989797]">
                                        Web Developer
                                    </p>
                                    <p className="text-sm font-['Montserrat'] font-medium text-[#323232]">
                                        Google
                                    </p>
                                </div>
                                <div className="font-['Montserrat'] text-[#323232] self-end mb-2 ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et

                                    dolore magna aliqua. Ut enim ad minim veniam, quui nostrud
                                </div>
                                <div className="flex flex-row gap-16 mb-5 w-full items-start">

                                    <div className="text-xs font-['Montserrat'] text-[#323232] mt-px mb-1">
                                        London
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232] mr-2">
                                        $20k Hourly
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232] mr-3">
                                        3 Days left
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232]">
                                        Remote
                                    </div>
                                </div>
                                <div className='h-[0.05rem] w-8/11 bg-lightBlue ml-6 flex items-center justify-between'>
                                    <div className='rounded-full w-2 h-2 bg-primary'></div>
                                    <div className='rounded-full w-2 h-2 bg-primary'></div>
                                    <div className='rounded-full w-2 h-2 bg-primary'></div>
                                    <div className='rounded-full w-1 h-1 bg-primary'></div>
                                    <div className='rounded-full w-2 h-2 bg-lightMilk'></div>
                                </div>
                                <div className="flex flex-row gap-8 w-full items-start">
                                    <div className="text-xs font-['Montserrat'] text-[#323232] mb-px mr-px">
                                        Milestone 1
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232]">
                                        Milestone 2
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232]">
                                        Milestone 3
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232] mr-px">
                                        Milestone 4
                                    </div>
                                    <div className="text-xs font-['Montserrat'] text-[#323232]">
                                        Milestone 5
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-3/10 px-3 pt-3 h-full'>
                        <div className='flex justify-between items-center '>
                            <p className="text-lg font-['Montserrat'] text-[#323232]">Messages</p>
                            <p className="text-sm font-['Montserrat'] text-[#0259db]">View all</p>
                        </div>
                        <div className="flex flex-row gap-4 w-full items-center pt-5 pb-2">
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

export default Freelancerboard
