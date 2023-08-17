import React from 'react'
import searchIcon from '../../assets/icons/Search2.png'
import mailIcon from '../../assets/icons/mail.png'
import bellIcon from '../../assets/icons/bell.png'
import secondProfileIcon from '../../assets/icons/second_profile.png'
import thirdProfileIcon from '../../assets/icons/third_profile.png'
import dropdownIcon from '../../assets/icons/dropdown.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const Navbar = ({ handleClick }) => {
    return (
        <div className='  border bg-primary flex h-1/10 items-center  justify-around rounded-sm w-full'>
            <div className='border border-white p-2 rounded-md'>
                <FontAwesomeIcon icon="fa-solid fa-bars" className="h-6 w-6 text-white" onClick={handleClick} > </FontAwesomeIcon>
            </div>

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
library.add(fab, fas, far)