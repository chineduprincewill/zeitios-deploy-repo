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
                <div className='flex items-center justify-between mt-20'>
                    <div>
                        <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full max-md:text-base max-sm:text-sm">
                            Payout
                        </p>

                        <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:text-sm max-sm:text-xs ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        </p>
                    </div>
                    <button className="max-sm:ml-2 px-14 max-sm:px-4 py-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <p className="text-white text-base font-medium">Save</p>
                    </button>

                </div>
                <div className=" bg-white rounded-[5px] h-[60rem] max-sm:h-[53rem] px-8 pt-5 mt-5">
                    <div className="text-zinc-700 text-base font-semibold">Profile Details</div>
                    <div className='w-1/4 max-2xl:w-1/3 max-xl:w-[40%] max-lg:w-1/2 max-sm:w-full flex  items-center mt-10'>
                        <img src={ProfileIcon} className='mr-4 max-sm:w-16' />
                        <div>
                            <div className="text-zinc-800 text-base font-semibold">Osaze Abu</div>
                            <div className="text-zinc-800 text-base font-normal">UI/UX Designer</div>
                            <div className="text-zinc-800 text-sm font-normal">Freelancer</div>
                        </div>

                    </div>
                    <form className='w-[60%] max-md:w-[80%] max-sm:w-full justify-between items-center flex flex-wrap my-5 '>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Name</label>
                            <input className='w-full p-2 px-1 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='Answer here...' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Email Address</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='zeitious@gmail.com' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Phone Number</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='Select' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Tagline</label>
                            <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-xs font-normal' placeholder='$' />
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Hourly Rate</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                            {/* <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm font-normal' placeholder='0123456789' /> */}
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Gender</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Specialization</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Type</label>
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
                            <label>City</label>
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
                                    <option selected disabled>English</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Languages Level</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Intermediate</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-full mb-5'>
                            <label>Tell us more about you</label>
                            <textarea rows="4" className="resize-none rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" placeholder='Description'>

                            </textarea>
                        </div>
                        <div className=" px-4 py-2 rounded-[5px] border border-neutral-300 justify-around items-center flex">
                            <img src={CameraIcon} className='mr-2' />
                            <div className="text-zinc-800 text-sm max-sm:text-[8px] font-normal">Upload Portfolio</div>
                        </div>

                    </form>
                </div>

                <div className="w-full h-[25rem] bg-white rounded-[5px] mt-10 px-8 pt-10">
                    <div className='flex items-center justify-between mt-5 w-[60%] max-md:w-[80%] max-sm:w-full '>
                        <div className="text-zinc-700 text-base max-sm:text-xs font-semibold">Skills</div>
                        <div className="text-blue-700 text-base max-sm:text-xs font-normal flex items-center ">
                            < AiOutlinePlus className='mr-1 w-4' />
                            Add Skills
                        </div>

                    </div>

                    <div className='w-[60%] max-md:w-[80%] flex flex-wrap justify-between items-center mt-5 mb-5 max-sm:w-full'>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Skills 1</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Figma</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>80</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Skills 2</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>Prototyping</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>70</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Skills 3</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
                                <select id="select" className='w-full'>
                                    <option selected disabled>User Interface</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-gray-900 text-base max-sm:text-xs font-normal w-[45%] mb-5'>
                            <label>Point</label>
                            <div className=" rounded-[5px] border border-neutral-300 opacity-40 p-2 w-full flex justify-between items-center text-zinc-700 text-sm max-sm:text-xs font-normal" >
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
