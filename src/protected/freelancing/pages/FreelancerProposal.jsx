import React, { useState, useEffect } from 'react'
import Sidebar from '../../../common/Sidebar'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ProposalNotifications from '../Components/ProposalNotifications'


const FreelancerProposal = () => {
    const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
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
    const pageNumbers = Array(pages);

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="w-full min-h-screen pb-10 flex bg-[#F5F5F5] font-[' Montserrat']">
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%]  ml-auto h-full mx-4 max-md:w-full max-md:mx-0'>

                <div className='max-md:px-4'>

                    <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-28  py-0 max-md:px-2 max-md:text-center max-md:mx-3">
                        My Proposal
                    </p>

                    <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:px-2 max-md:text-center mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </p>
                    <div className='flex items-center justify-between w-4/5 max-xl:w-full mt-5 max-md:text-sm'>
                        <div className="text-blue-700 text-base max-md:text-sm max-sm:text-[10px] font-semibold underline max-sm:mr-2">Active Proposals</div>
                        <div className="text-stone-400 text-base max-md:text-sm max-sm:text-[10px]  font-medium max-sm:mr-2">Pending Proposals</div>
                        <div className="text-stone-400 text-base max-md:text-sm max-sm:text-[10px]  font-medium max-sm:mr-2">Completed Proposals</div>
                        <div className="text-stone-400 text-base max-md:text-sm max-sm:text-[10px]  font-medium max-sm:mr-2">Rejected Proposals</div>
                    </div>

                    <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-between  w-full  py-3 rounded mt-5">

                        <div className="bg-blue-100 flex flex-row justify-between items-center px-2 max-lg:px-4 max-md:text-sm max-md:px-1 max-sm:text-[10px] max-sm:font-bold max-sm:py-2 py-2">
                            <div className="font-['Montserrat'] font-medium text-[#332233] w-[65%] pl-10">
                                Name
                            </div>
                            <div className="flex w-[35%] items-start justify-between">
                                <div className="font-['Montserrat'] font-medium text-[#332233] ">
                                    Cost
                                </div>

                                <div className="font-['Montserrat'] font-medium text-[#332233] ">
                                    Action
                                </div>
                            </div>
                        </div>
                        {postsPerPage.map(item => <ProposalNotifications key={item} />)}
                        <div className="bg-[#f3f3f3] flex justify-between w-1/3 max-sm:w-[60%] mx-auto items-center p-2 mt-5">
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
        </div>
    )
}

export default FreelancerProposal



