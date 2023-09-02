import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import PayoutIcon1 from '../../../assets/icons/payouts1_icon.png'
import PayoutIcon2 from '../../../assets/icons/payouts2_icon.png'
import PayoutIcon3 from '../../../assets/icons/payouts3_icon.png'
import PayoutIcon4 from '../../../assets/icons/payouts4_icon.png'
import StatementNotifications from '../Components/StatementNotifications'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import icon from '../../../assets/icons/circle_plus_icon.png'
import filterIcon from '../../../assets/icons/filter_icon.png'
import ServiceNotifications from '../Components/ServiceNotifications'


const ManageServices3 = () => {
    const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,]);
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
        <div className='w-full min-h-screen pb-10 relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <div className='flex justify-between items-center mt-20 max-sm:flex-col max-sm:items-start'>
                    <div className=''>
                        <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full   max-sm:text-sm">
                            Manage Services
                        </p>

                        <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-lg:text-sm max-md:text-[10px]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed

                        </p>
                    </div>
                    <button className=" px-4 py-2 bg-blue-700 rounded-[5px] justify-center items-center gap-2.5 inline-flex max-sm:ml-auto max-sm:mt-2 ">
                        <img src={icon} />

                        <div className="text-white text-base max-lg:text-sm max-md:text-[10px] font-medium mr-2">Add Services</div>
                    </button>
                </div>
                <div className='flex justify-between items-center mt-10 max-sm:mt-5'>
                    <div className='flex items-center justify-between w-1/2 max-xl:w-[70%]'>
                        <div className="text-blue-700 text-base max-lg:text-sm max-md:text-[10px] font-semibold underline max-sm:mr-1">Active Services</div>
                        <div className="text-zinc-800 text-base max-lg:text-sm max-md:text-[10px] font-normal tracking-wide max-sm:mr-1">Pending Services</div>
                        <div className="text-zinc-800 text-base max-lg:text-sm max-md:text-[10px] font-normal tracking-wide max-sm:mr-1">Completed Services</div>
                    </div>
                    <button className="border-solid border-[#323232] flex flex-row justify-center gap-2 max-sm:gap-1 items-center border rounded w-[18%] max-lg:w-1/5 max-md:w-[22%] max-sm:w-[28%] max-sm:text-[8px] p-2 max-sm:px-0 max-sm:py-1">
                        <img
                            src={filterIcon}
                            className="w-4 max-sm:w-3 shrink-0"
                        />
                        <p className="font-['Montserrat'] font-medium text-[#323232] max-md:text-sm max-sm:text-xs">
                            Filter here
                        </p>
                    </button>
                </div>

                <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] mt-3 bg-white flex flex-col w-full pt-2 pb-5 rounded h-full">
                    {/* <div className="w-[1083px] h-[53px] "  /> */}
                    <div className="bg-blue-100  flex flex-row justify-between items-center px-6 max-lg:px-4 max-md:px-1  py-2">
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/2 max-sm:w-[60%] flex justify-start max-md:text-xs max-sm:text-[8px]">
                            Name
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/5 max-lg:w-1/4  flex justify-center max-md:text-xs max-sm:text-[8px]">
                            Cost
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/5 max-lg:w-1/4 flex justify-end max-md:text-xs max-sm:text-[8px]">
                            Action
                        </div>

                    </div>
                    {postsPerPage.map(item => <ServiceNotifications key={item} />)}

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
            </div>
        </div>
    )
}

export default ManageServices3
