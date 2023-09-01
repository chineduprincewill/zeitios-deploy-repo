import React from 'react'
import threedotIcon from '../../../assets/icons/threedot.png'
import fifteenthPicture from '../../../assets/image/fifteenth_picture.png'

const ServiceNotifications = () => {
    return (
        <div className=" h-full flex flex-col justify-center  ">
            <div className='flex justify-between items-center px-6 max-md:px-1 py-3 '>
                <div className=" text-zinc-700 text-base font-normal w-1/2 max-sm:w-[55%]  flex justify-start max-md:text-xs max-sm:text-[8px] max-sm:mr-[2px]">
                    <img src={fifteenthPicture} className='max-sm:w-16' />
                    <div className='ml-2'>
                        <div className="text-zinc-800  font-medium ">I will help you develop a mobile and web app</div>
                        <div className=" text-zinc-800  font-normal">Delivered in 4 days</div>
                        <div className=" text-zinc-800 font-normal">Upload apps to stores</div>
                    </div>
                </div>

                <div className=" text-zinc-700 text-base font-normal w-1/5 max-lg:w-1/4 max-sm:w-[30%] flex justify-center max-md:text-xs max-sm:text-[8px]">$20k-$30k Hourly</div>
                <div className='w-1/5 max-lg:w-[15%]  flex justify-end'>
                    <img src={threedotIcon} className='' />
                </div>

                {/* w-1/4  flex justify-end text-base font-normal text-zinc-700 max-md:text-xs max-sm:text-[8px] */}
            </div>
            <div className='h-[1px] w-full bg-lightGrey'>
            </div>
        </div>
    )
}

export default ServiceNotifications
