import React from 'react'
import Sidebar from '../../../common/Sidebar'
import ProfileIcon from '../../../assets/icons/third_profile_icon.png'
import CameraIcon from '../../../assets/icons/camera_icon.png'
import { AiOutlinePlus } from 'react-icons/ai'

const Freelancerprofile = () => {
    return (
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5] pb-16'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <div className='flex items-center justify-between mt-20 border-4'>
                    <div>
                        <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full max-md:text-base max-sm:text-sm">
                            Payout
                        </p>

                        <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:text-sm max-sm:text-xs ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        </p>
                    </div>
                    <button className=" px-14 py-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <p className="text-white text-base font-medium">Save</p>
                    </button>

                </div>
                <div className=" bg-white rounded-[5px] h-[60rem] px-8 pt-5">
                    <div className="text-zinc-700 text-base font-semibold">Profile Details</div>
                    <div className='w-1/4 flex  items-center mt-10'>
                        <img src={ProfileIcon} className='mr-4' />
                        <div>
                            <div className="text-zinc-800 text-base font-semibold">Osaze Abu</div>
                            <div className="text-zinc-800 text-base font-normal">UI/UX Designer</div>
                            <div className="text-zinc-800 text-sm font-normal">Freelancer</div>
                        </div>

                    </div>
                    <form className='w-[60%] justify-between items-center flex flex-wrap my-5 '>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Name</label>
                            <input className='w-full p-2 px-1 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='Answer here...' />
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Email Address</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='zeitious@gmail.com' />
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Phone Number</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='Select' />
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Tagline</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='$' />
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Hourly Rate</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                            {/* <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='0123456789' /> */}
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Gender</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Specialization</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Type</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Country</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>City</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Language</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>English</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Languages Level</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Intermediate</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-full mb-5'>
                            <label>Tell us more about you</label>
                            <textarea rows="4" className="resize-none rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" placeholder='Description'>

                            </textarea>
                        </div>
                        <div className=" pl-3 py-[7px] rounded-[5px] border border-neutral-300 justify-start items-center gap-6 inline-flex w-1/3">
                            <img src={CameraIcon} />
                            <div className="text-zinc-800 text-sm font-normal">Upload Portfolio</div>
                        </div>

                    </form>
                </div>

                <div className="w-full h-[25rem] bg-white rounded-[5px] mt-10 px-8 pt-10">
                    <div className='flex items-center justify-between mt-5 w-[70%] '>
                        <div className="text-zinc-700 text-base font-semibold">Skills</div>
                        <div className="text-blue-700 text-base font-normal flex items-center ">
                            < AiOutlinePlus className='mr-1 w-4' />
                            Add Skills
                        </div>

                    </div>

                    <div className='w-[70%] flex flex-wrap justify-between items-center mt-5 mb-5'>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Skills 1</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Figma</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>80</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Skills 2</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Prototyping</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>70</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Skills 3</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>User Interface</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>60</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freelancerprofile
