import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className="">
            <h1>404</h1>
            <h4>page not found</h4>
            <Link to='/' className=''>
                Back Home
            </Link>
        </div>
    )
}

export default Error
