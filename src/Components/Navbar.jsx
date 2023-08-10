import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import Logo from '../assets/logo/Logo.png'
import Search from "../assets/icons/Search.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false)
    const [showDiv, setShowDiv] = useState(false)
    const [text, setText] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        setShowDropdown(prev => !prev)
    }
    const handleDiv = (e) => {
        e.preventDefault();
        setShowDiv(prev => !prev)
    }
    const handleNavbar = (e) => {
        e.preventDefault();
        setShowNavbar(prev => !prev)
    }
    return (
        <>
            <div className='flex w-full p-2 items-center justify-around'>
                <div className="max-md:border max-sm:border max-sm:border-white max-md:border-white lg:border-none  max-sm:rounded-lg max-md:rounded-lg lg:rounded-none max-sm:p-2 max-md:p-2 max-sm:ml-4 max-md:ml-4 lg:ml-0 lg:h-0 lg:w-0" >
                    <FontAwesomeIcon icon="fa-solid fa-bars" className=" max-sm:text-white max-md:text-white lg:h-0 lg:w-0 " onClick={handleNavbar}> </FontAwesomeIcon>
                </div>

                <div>
                    <img src={Logo} alt="Logo" className="" />
                </div>
                {showNavbar &&
                    <div className="flex justify-around items-center max-sm:absolute max-md:absolute max-sm:mt-28 max-md:mt-28">
                        <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm"> Home </div>
                        <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm"> About </div>
                        <div className="text-white lg:px-2 flex flex-col justify-around items-center relative px-1 max-sm:text-sm max-md:text-sm">  <div className="text-white lg:px-2 px-1 flex justify-around items-center"> Browse Jobs <MdKeyboardArrowDown onClick={handleClick} className='h-4 w-4' /> </div>
                            {showDropdown && <div className="bg-secondary p-4 absolute mt-28 max-sm:text-sm max-md:text-sm">
                                <div>Freelancers</div>
                                <div>Teams</div>
                            </div>}
                        </div>
                        <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm"> Services </div>
                        <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm"> Blog </div>
                        <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm"> Contacts </div>
                    </div>}

                {showDiv ? <input type="text" autoFocus value={text} className='bg-transparent px-2 text-white w-1/6 rounded-xl border border-white' onChange={(e) => {
                    setText(e.target.value);
                }} placeholder="Search ....." /> : <div>
                    < CiSearch className='text-white h-8 w-8' onClick={handleDiv} />
                </div>}


                <button className="border border-white md:p-3 p-1 text-white rounded-md text-center">Login</button>
                <button className="bg-primary text-white md:p-3 p-1 text-center rounded-md">Register</button>
            </div>

        </>


    )
}

export default Navbar
library.add(fab, fas, far)