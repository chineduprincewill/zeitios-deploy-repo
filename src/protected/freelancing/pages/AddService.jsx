import React from 'react'
import Sidebar from '../../../common/Sidebar'
import ProfileIcon from '../../../assets/icons/third_profile_icon.png'
import CameraIcon from '../../../assets/icons/camera_icon.png'
import { AiOutlinePlus } from 'react-icons/ai'

const AddService = () => {
    return (
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5] pb-16'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <div className='flex items-center justify-between mt-20'>
                    <div>
                        <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full max-md:text-base max-sm:text-sm">
                            Add Services
                        </p>

                        <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:text-sm max-sm:text-xs ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        </p>
                    </div>


                </div>
                <div className=" bg-white rounded-[5px] h-[60rem] max-sm:h-[53rem] px-8 pt-5 mt-5">
                    <div className="text-zinc-700 text-base font-semibold">Basic Information</div>

                    <form className='w-[60%] max-md:w-[80%] max-sm:w-full justify-between items-center flex flex-wrap my-5 mt-10 '>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Service Title</label>
                            <input className='w-full p-2 px-1 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='Answer here...' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Freelance Type</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Category</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Cost</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='$' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Price Type</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                            {/* <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='0123456789' /> */}
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Level</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Delivery Time</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>City</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Country</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Language</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Skills</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>English</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-[45%] p-2 rounded-[5px] border border-neutral-300  items-center flex">
                            <img src={CameraIcon} className='mr-2 max-sm:mr-1 max-lg:w-4' />
                            <div className="text-zinc-800 text-xs max-lg:text-[10px] max-sm:text-[6px] font-normal">Upload Attachments</div>
                        </div>

                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-full mb-5'>
                            <label>Service Detail</label>
                            <textarea rows="4" className="resize-none rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" placeholder='Description'>

                            </textarea>
                        </div>

                        <div className="w-[30%] px-2 py-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-white text-base font-medium">Next</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddService
