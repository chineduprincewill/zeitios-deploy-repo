import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { getUserDetail } from '../protected/actions/userActions';

const PageHeader = () => {

    const location  = useLocation();
    const { token, user_username } = useContext(AuthContext);
    const pagetitle = location.pathname.replace('/', '').replace('-', ' ').replace('freelancer', '').replace('client', '');

    const [userdetail, setUserdetail] = useState(null);
    const [error, setError] = useState(null);

    console.log(userdetail?.first_name);

    useEffect(() => {
        getUserDetail(token, setUserdetail, setError);
    }, [])

    return (
        <div className='w-full grid md:flex md:justify-between md:items-center pb-6 pt-12 mt-12 space-y-4 md:space-y-0'>
          <div>
            {
              pagetitle.includes('dashboard') ? 
                <div className='grid space-y-2'>
                    <span className='text-3xl capitalize'>welcome back, {userdetail !== null && userdetail?.first_name +' '+ userdetail?.last_name}</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
                </div> :
                <div className='grid space-y-2'>
                  <span className='text-3xl capitalize'>{pagetitle}</span>
                  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
              </div>
            }
          </div>
          <div>
            {userdetail !== null && 
              userdetail?.email_verified ?
                <span className='bg-blue-100 hover:bg-blue-200 text-blue-900 text-sm font-medium p-3 rounded-md cursor-pointer'>
                  Email verified!
                </span> :
                <span className='bg-orange-100 hover:bg-orange-200 text-orange-900 text-sm font-medium p-3 rounded-md cursor-pointer'>
                  Email not verified. Click to verify your email
                </span>
          }
          </div>
          
        </div>
    )
}

export default PageHeader