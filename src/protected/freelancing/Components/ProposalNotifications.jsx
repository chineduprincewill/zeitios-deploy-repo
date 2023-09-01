import React from 'react'
import microsoftIcon from '../../../assets/icons/Microsoft.png'
import threedotIcon from '../../../assets/icons/threedot.png'

const ProposalNotifications = () => {
    return (
        <div className="flex flex-col w-full items-start font-['Montserrat'] ">
            <div className="w-full flex flex-row items-center  justify-between px-4 max-md:px-1 py-5">
                <div className='flex items-center max-sm:flex-col max-sm:items-start mr-2 w-[60%]'>
                    <div className="bg-lightOrange flex justify-center items-center p-2 rounded-full max-sm:mb-2">
                        <img
                            src={microsoftIcon}
                            className=" max-sm:w-4"
                        />
                    </div>
                    <div className="flex flex-col gap-1  items-start ml-5 max-sm:ml-0">
                        <div className="text-zinc-800 text-base max-md:text-xs max-sm:text-[10px]  font-medium">Full-stack Developer to help us build our websites</div>
                        <div className="text-sm max-md:text-[10px]   max-sm:text-[8px] text-zinc-800 font-normal flex items-center justify-between w-full">
                            <div className="">London</div>
                            <div className="">Jan 14, 2022</div>
                            <div className="">2 Received</div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[40%]  justify-between items-center max-lg:ml-2'>
                    <div className=" text-zinc-800 text-base max-md:text-xs max-sm:text-[10px]  font-normal max-sm:mr-2">$20k-$30k Hourly</div>


                    <img src={threedotIcon} className="" />
                </div>

            </div>
            <div className='h-1 w-full bg-lightGrey'>
            </div>
        </div>

    )
}

export default ProposalNotifications
