import React from 'react'
import microsoftIcon from '../assets/icons/Microsoft.png'
import threedotIcon from '../assets/icons/threedot.png'

const JobNotifications = () => {
    return (
        <div className="flex flex-col w-full items-start">
            <div className="w-full flex flex-row items-center justify-around py-5">
                <div className="bg-lightOrange flex justify-center items-center p-2 rounded-full">
                    <img
                        src={microsoftIcon}
                        className=""
                    />
                </div>
                <div className="flex flex-col gap-1 items-start">
                    <div className="font-['Montserrat'] font-medium text-[#323232]">
                        Full-stack Developer to help us build our websites
                    </div>
                    <div className="text-sm font-['Poppins'] text-[#343f42]">
                        Mr Charles Mark
                    </div>
                </div>
                <div className=" flex flex-col gap-1 items-start">
                    <div className="font-['Poppins'] text-[#343f42]">
                        January 15, 2023
                    </div>
                    <div className="font-['Poppins'] text-[#343f42]">
                        May 15, 2023
                    </div>
                </div>

                <button className=" border-solid border-[#3bb001] flex text-sm font-['Montserrat'] font-medium text-[#3bb001] rounded-lg border-2 p-2 items-center">
                    Active
                </button>

                <img src={threedotIcon} className="" />
            </div>
            <div className='h-1 w-full bg-lightGrey'>
            </div>
        </div>



    )
}

export default JobNotifications
