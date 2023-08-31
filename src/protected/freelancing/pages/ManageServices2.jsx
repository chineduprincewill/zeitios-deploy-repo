import React from 'react'
import Sidebar from '../../../common/Sidebar'
import penIcon from '../../../assets/icons/pen_icon.png'
import { TiTick } from 'react-icons/ti'

const ManageServices2 = () => {
    return (
        <div className='w-full min-h-screen pb-10 relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <p className="text-4xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-32 max-sm:mt-20 max-sm:text-sm">
                    Add Services
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-lg:text-sm max-md:text-[10px]  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed

                </p>
                <div className="w-full bg-white rounded-[5px] h-[40rem] max-lg:h-[44rem]  mt-10 max-sm:mt-5">
                    <div className='w-full py-10 px-2 flex justify-between max-sm:flex-col'>
                        <div className="text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-semibold  items-start">Packages</div>
                        <div className='flex items-start w-3/4 max-sm:w-[80%] max-sm:mx-auto justify-between pt-10'>
                            <div className="flex flex-col justify-between gap-1 items-start w-1/4">
                                <div className='flex justify-between max-sm:justify-normal items-center w-full'>
                                    <div className=" text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-medium">Basic</div>
                                    <img src={penIcon} alt="icon" className='max-sm:w-3 max-sm:ml-2' />
                                </div>
                                <div className=" text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">I will redesign your current landing page or create one for you</div>
                            </div>
                            <div className="flex flex-col justify-between gap-1 items-start w-1/4">
                                <div className='flex justify-between max-sm:justify-normal items-center w-full'>
                                    <div className=" text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-medium">Standard</div>
                                    <img src={penIcon} alt="icon" className='max-sm:w-3 max-sm:ml-2' />
                                </div>
                                <div className=" text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">6 High Quality Desktop pages and a landing page</div>
                            </div>
                            <div className="flex flex-col justify-between gap-1 items-start w-1/4">
                                <div className='flex justify-between max-sm:justify-normal items-center w-full'>
                                    <div className=" text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-medium">Premium</div>
                                    <img src={penIcon} alt="icon" className='max-sm:w-3 max-sm:ml-2' />
                                </div>
                                <div className=" text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">10 High Quality Desktop and mobile pages, and also a landing page</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-blue-100 p-2 flex justify-between items-center" >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Source file</div>
                        <div className='flex items-center w-3/4 justify-between'>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 rounded-[3px] border border-zinc-800" ></div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center" >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Prototype</div>
                        <div className='flex items-center w-3/4 justify-between '>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 rounded-[3px] border border-zinc-800 " ></div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-blue-100 p-2 flex justify-between items-center " >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Responsive  design</div>
                        <div className='flex items-center w-3/4 justify-between'>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 rounded-[3px] border border-zinc-800" ></div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                            <div className="flex justify-between gap-1 items-start w-1/4">
                                <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                                    < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center" >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Number of pages</div>
                        <div className='flex items-center w-3/4 justify-between '>
                            <div className="flex gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                21
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                35
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px]  items-start w-1/4">
                                50
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full  bg-blue-100 p-2 flex justify-between items-center" >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Revision</div>
                        <div className='flex items-center w-3/4 justify-between'>
                            <div className="flex  gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                5
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                10
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-20 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                10
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center" >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Delivery time</div>
                        <div className='flex items-center w-3/4 justify-between'>
                            <div className="flex  gap-8 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                3 day(s)
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-8 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                5 day(s)
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-8 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                7 day(s)
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-blue-100 p-2 flex justify-between items-center " >
                        <div className="text-zinc-800 max-sm:w-1/4 text-base max-md:text-sm max-sm:text-[10px] font-medium">Total</div>
                        <div className='flex items-center w-3/4 justify-between'>
                            <div className="flex  gap-14 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                $50
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-14 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                $100
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                            <div className="flex  gap-14 max-sm:gap-0 max-sm:justify-between max-sm:text-[8px] items-start w-1/4">
                                $150
                                <img src={penIcon} alt="icon" className='max-sm:w-3' />
                            </div>
                        </div>
                    </div>
                    <button className=" mt-10 w-1/4 py-3 mx-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-medium">Save</div>
                    </button>

                </div>

                <div className="w-full bg-white h-[30rem] rounded-[5px] mt-5 pt-10 ">
                    <div className="text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-semibold pb-5 ml-2">Add extra services</div>
                    <div className="w-[90%]  py-3 px-3 rounded-[3px] border border-zinc-800 flex items-center my-5" >
                        <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 rounded-[3px] border border-zinc-800" ></div>
                        <div className='ml-5'>
                            <div className="text-zinc-800 text-base max-sm:text-[10px] max-md:text-sm font-medium">Create contents for your design (+3 days)</div>
                            <div className="text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">I will create well detailed contents </div>
                        </div>
                        <div className="text-zinc-800 text-xl max-md:text-base max-sm:text-[10px] font-medium ml-auto">$50</div>

                    </div>
                    <div className="w-[90%]  py-3 px-3 rounded-[3px] border border-zinc-800 flex items-center my-5" >
                        <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 bg-blue-950 rounded-[3px] text-white" >
                            < TiTick className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                        </div>
                        <div className='ml-5'>
                            <div className="text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-medium">Create contents for your design (+4 days)</div>
                            <div className="text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">I will create well detailed contents </div>
                        </div>
                        <div className="text-zinc-800 text-xl max-md:text-base max-sm:text-[10px] font-medium ml-auto">$75</div>

                    </div>
                    <div className="w-[90%]  py-3 px-3 rounded-[3px] border border-zinc-800 flex items-center my-5" >
                        <div className="w-8 h-8 max-sm:w-4 max-sm:h-4 rounded-[3px] border border-zinc-800" ></div>
                        <div className='ml-5'>
                            <div className="text-zinc-800 text-base max-md:text-sm max-sm:text-[10px] font-medium">Create contents for your design (+5 days)</div>
                            <div className="text-zinc-800 text-sm max-md:text-xs max-sm:text-[8px] font-normal">I will create well detailed contents </div>
                        </div>
                        <div className="text-zinc-800 text-xl max-md:text-base max-sm:text-[10px] font-medium ml-auto">$100</div>

                    </div>
                    <button className=" mt-5 w-1/4 py-3 mx-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-medium">Save</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManageServices2
