import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const PageHeader = () => {

    const location  = useLocation();
    const { user } = useContext(AuthContext);
    //const useremail = JSON.parse(localStorage.getItem('auth'));
    const pagetitle = location.pathname.replace('/', '').replace('-', ' ').replace('freelancer', '').replace('client', '');

    return (
        <div className='w-full grid md:flex md:justify-between md:items-center pb-6 pt-12 mt-12 space-y-4 md:space-y-0'>
          <div>
            {
              pagetitle.includes('dashboard') ? 
                <div className='grid space-y-2'>
                    <span className='text-3xl capitalize'>welcome back, {user?.last_name}, {user?.first_name}</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
                </div> :
                <div className='grid space-y-2'>
                  <span className='text-3xl capitalize'>{pagetitle}</span>
                  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
              </div>
            }
          </div>
          <div>
            {!user?.email_verified && 
              <span className='bg-orange-100 hover:bg-orange-200 text-orange-900 text-sm font-medium p-3 rounded-md cursor-pointer'>
                Email not verified. Click to verify your email
              </span>
            }
          </div>
          
        </div>
    )
}

export default PageHeader