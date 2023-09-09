import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import filterIcon from '../../../assets/icons/filter_icon.png'
import PayoutNotifications from '../Components/PayoutNotifications'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { PayoutData } from '../../../data'
//import { RiArrowDropDownLine } from 'react-icons/ri'

const FreelancerPayouts = () => {
    const [posts, setPosts] = useState(PayoutData);
    const [currentPage, setCurrentPage] = useState(1);
    const totalNotifications = posts.length;


    const pageSize = 6;
    const pages = Math.ceil(totalNotifications / pageSize);

    const goToPrev = () => {

        const prevPage = Math.max(currentPage - 1, 1);
        setCurrentPage(prevPage);
        console.log('prev', prevPage)
    };

    const goToNext = () => {

        const nextPage = Math.min(currentPage + 1, pages);
        setCurrentPage(nextPage);
        console.log('next', nextPage)
    };
    const start = pageSize * (currentPage - 1);
    const end = pageSize * currentPage;
    const postsPerPage = posts.slice(start, end);
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < pages;
    const pageNumbers = Array(pages);

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5] pb-16'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-20 max-md:text-base max-sm:text-sm">
                    Payout
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:text-sm max-sm:text-xs ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className='w-full flex items-center justify-end max-sm:mt-5'>
                    <button className="border-solid border-[#323232] flex flex-row justify-center gap-2 items-center border rounded w-[18%] max-lg:w-1/5 max-md:w-[22%] max-sm:w-[42%] p-2">
                        <img
                            src={filterIcon}
                            className="w-4 shrink-0"
                        />
                        <p className="font-['Montserrat'] font-medium text-[#323232] max-md:text-sm max-sm:text-xs">
                            Filter here
                        </p>
                    </button>
                </div>
                <div className="shadow bg-white flex flex-col w-full py-2 rounded h-full mt-3">
                    {/* <div className="w-[1083px] h-[53px] "  /> */}
                    <div className="bg-blue-100 mx-3 flex flex-row justify-between items-center px-4 max-lg:px-4 max-md:px-1 max-md:text-xs max-sm:text-[8px] max-sm:font-bold py-2">
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4 max-sm:w-1/5  flex justify-start">
                            Amount
                        </div>

                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4  flex justify-center max-sm:justify-end">
                            Purchase Date
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4 max-sm:w-[30%]  flex justify-center">
                            Payment Method
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4 flex justify-end ">
                            Payment Status
                        </div>

                    </div>
                    {postsPerPage.map(item => < PayoutNotifications amount={item.amount} date={item.date} method={item.method} status={item.status} color={item.color} key={item} />)}

                    <div className="bg-[#f3f3f3] flex justify-between w-1/3 max-sm:w-[70%] mx-auto items-center p-2 mt-5">
                        <button disabled={!canGoPrev} className="border-solid border-[#d9d9d9] bg-white flex w-4 items-center border rounded-sm" onClick={goToPrev}>
                            <MdKeyboardArrowLeft />
                        </button>
                        {pageNumbers.map((i) => {
                            return (
                                <button key={i} className="border-solid border-[#d9d9d9] bg-white flex px-2 items-center border rounded-sm " onClick={() => (setCurrentPage(i))}>
                                    {i}
                                </button>
                            )

                        })


                        }
                        <button disabled={currentPage === pages ? true : false} className="border-solid border-[#d9d9d9] bg-white flex w-4 items-center border rounded-sm" onClick={goToNext}>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>


                <div className="w-full h-[40rem] bg-white rounded-[5px] mt-10 px-8 pt-10">
                    <div className="text-zinc-700 text-base font-semibold">Payment Methods</div>
                    <form className='w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full h-full mt-5'>
                        <div className="text-gray-900 text-base max-sm:text-[10px] font-normal">Select default payout method</div>
                        <div className=" rounded-[5px] border border-neutral-300 p-2 w-2/3 max-md:w-1/2 flex justify-between items-center max-sm:text-[10px]" >
                            <select id="select" className='w-full'>
                                <option selected disabled>Paypal</option>
                                <option>Payoneer</option>
                                <option>Bank Transfer</option>
                            </select>

                        </div>
                        <div className="text-gray-900 text-base max-sm:text-sm font-normal mt-5">Payout Details</div>
                        <div className='w-[70%] max-xl:w-[80%] max-sm:w-full bg-blue-700 bg-opacity-30 rounded-[5px] border border-neutral-300 flex items-center py-1 mt-2'>

                            <div className=" text-zinc-700 text-sm max-sm:text-[8px] font-normal p-2 rounded-[5px] flex justify-center w-1/3 hover:bg-white">Paypal</div>
                            {/* <div className="w-[113px] h-[33px] p-2 bg-white rounded-[5px] justify-start items-start gap-2.5 inline-flex"> */}
                            <div className="text-gray-900 text-sm max-sm:text-[8px] font-normal p-2 rounded-[5px] flex justify-center w-1/3 hover:bg-white">Bank Transfer</div>
                            {/* </div> */}
                            <div className=" text-zinc-700 text-sm max-sm:text-[8px] font-normal p-2 rounded-[5px] flex justify-center w-1/3 hover:bg-white">Payoneer</div>
                        </div>
                        <div className='w-full flex flex-wrap justify-between items-center mt-5 mb-5 border-4'>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Bank Name</label>
                                <input className='w-full p-2 px-1 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='First Bank' />
                            </div>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Bank Account Number</label>
                                <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='0123456789' />
                            </div>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Bank Account Holder’s Name</label>
                                <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='Osaze Abu' />
                            </div>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Bank Routing Number</label>
                                <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='0123456789' />
                            </div>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Bank IBAN</label>
                                <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='0123456789' />
                            </div>
                            <div className='text-gray-900 text-sm max-sm:text-[10px] font-normal w-[45%] mb-5'>
                                <label>Swift Code</label>
                                <input className='w-full p-2 rounded-[5px] border border-neutral-300 opacity-40 text-zinc-700 text-sm max-sm:text-[10px] font-normal' placeholder='0123456789' />
                            </div>

                        </div>
                        <div className="w-1/3 max-sm:w-[40%] px-4 py-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-white text-base font-medium max-sm:text-[10px]">Save Details</div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FreelancerPayouts
