import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdKeyboardArrowDown } from 'react-icons/md'
import Logo from '../assets/logo/Logo.png'
import Search from "../assets/icons/Search.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
    const [showDiv, setShowDiv] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setShowDiv(prev => !prev)
    }
    return (
        <>
            <div className='flex w-full p-2 items-center justify-around'>
                <div className="border border-white md:border-none  rounded-lg md:rounded-none p-2 ml-4 md:ml-0 md:h-0 md:w-0" >
                    <FontAwesomeIcon icon="fa-solid fa-bars" className=" text-white md:h-0 md:w-0 "> </FontAwesomeIcon>
                </div>

                <div>
                    <img src={Logo} alt="Logo" className="" />
                </div>
                <div className="flex justify-around items-center max-sm:fixed max-sm:mt-28">
                    <div className="text-white px-2 max-sm:px-1 max-sm:text-sm"> Home </div>
                    <div className="text-white px-2 max-sm:px-1 max-sm:text-sm"> About </div>
                    <div className="text-white px-2 flex flex-col justify-around items-center relative max-sm:px-1 max-sm:text-sm">  <div className="text-white px-2 max-sm:px-1 flex justify-around items-center"> Browse Jobs <MdKeyboardArrowDown onClick={handleClick} className='h-4 w-4 ' /> </div>
                        {showDiv && <div className="bg-secondary p-4 fixed mt-28 max-sm:text-sm">
                            <div>Freelancers</div>
                            <div>Teams</div>
                        </div>}
                    </div>
                    <div className="text-white px-2 max-sm:px-1 max-sm:text-sm"> Services </div>
                    <div className="text-white px-2 max-sm:px-1 max-sm:text-sm"> Blog </div>
                    <div className="text-white px-2 max-sm:px-1 max-sm:text-sm"> Contacts </div>
                </div>

                <div>
                    <img src={Search} alt="Logo" className="" />
                </div>
                <button className="border border-white md:p-3 p-1 text-white rounded-md text-center">Login</button>
                <button className="bg-primary text-white md:p-3 p-1 text-center rounded-md">Register</button>
            </div></>


    )
}

export default Navbar
library.add(fab, fas, far)