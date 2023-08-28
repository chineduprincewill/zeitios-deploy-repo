import React from 'react'

const PayoutNotifications = ({ amount, date, method, status, color }) => {
    console.log(`border-${color}`)
    return (
        <div className=" h-full flex flex-col justify-center mx-3  ">
            <div className='flex justify-between items-center px-4  max-md:px-1 py-3 '>
                <div className=" text-zinc-700 text-base font-normal w-1/4 max-sm:w-1/5  flex justify-start max-md:text-xs max-sm:text-[8px] max-sm:mr-[2px]">{amount}</div>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-center max-sm:justify-end max-md:text-xs max-sm:text-[8px]">{date}</div>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-center max-md:text-xs max-sm:text-[8px]">{method}</div>
                <div className='w-1/4  flex justify-end'>
                    <button className={`p-2 max-sm:p-1 rounded-[10px] border border-${color} justify-center items-center inline-flex`} >
                        <div className={`text-${color} text-sm font-medium max-md:text-xs max-sm:text-[8px]`}>{status}</div>
                    </button>
                </div>
            </div>
            <div className='h-[1px] w-full bg-lightGrey'>
            </div>
        </div>
    )
}

export default PayoutNotifications
