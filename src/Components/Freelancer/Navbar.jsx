import React from 'react'
import searchIcon from '../../assets/icons/Search2.png'
import mailIcon from '../../assets/icons/mail.png'
import bellIcon from '../../assets/icons/bell.png'
import secondProfileIcon from '../../assets/icons/second_profile.png'
import thirdProfileIcon from '../../assets/icons/third_profile.png'
import dropdownIcon from '../../assets/icons/dropdown.png'

const Navbar = () => {
    return (
        <div className='  border bg-primary flex flex-row h-1/10 items-center pl-20 pr-6  justify-between rounded-sm'>
            <div className='flex flex-row bg-[#dfe1e3] w-1/3 px-4 py-1 rounded-[20px] items-center'>
                <img src={searchIcon} alt="search icon" />
                <input placeholder="Search" name="search" className="ml-3 bg-transparent font-[' Poppins'] text-[#343f42]" />
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={bellIcon} alt="search icon" />
                <img src={mailIcon} alt="search icon" />
                <div className='text-white text-center'>
                    <p className="text-xs font-[' Poppins']">User</p>
                    <p className="text-xs font-[' Poppins']">Osaze Mike</p>
                </div>
                <div className=' flex'>
                    <img src={secondProfileIcon} alt="search icon" />
                    <div className=' h-full self-center ml-1'>
                        <img src={dropdownIcon} alt="search icon" className=' self-center ' />
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Navbar
