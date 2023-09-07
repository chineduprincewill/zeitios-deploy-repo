import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { registerUser } from './actions/authActions'
import Navigate from '../../common/Navigate'
import Banner from '../../common/Banner'
import { HiPlus } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai'

const Register = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [email, setEmail] = useState();
    const [category, setCategory] = useState(state?.selectedOption);
    const [password, setPassword] = useState();
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState("");

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [registering, setRegistering] = useState(false);

    const addSkill = () => {
        if(skill === ""){
            alert("No skill entered!")
        }
        else{
            setSkills(skills => [ 
                    ...skills,
                    skill
                ]
            );
        }
        
        setSkill("");
    }


    const removeSkill = (e, skillitem) => {
        if(window.confirm(`Are you sure you want to remove ${skillitem} from your skills?`)){

            let filteredArray = skills.filter(item => item !== skillitem)
            setSkills(filteredArray);
        }
    }



    const handleRegister = (e) => {
        e.preventDefault();

        setRegistering(true);

        const data = {
            first_name : firstname, 
            last_name : lastname, 
            phone_number : phonenumber, 
            email, 
            password,
            category, 
            skills
        }

        console.log(data);

        phonenumber.length > 13 ? setError("Invalid Phone number!") : registerUser(data, setSuccess, setError, setRegistering);
    }

    if(success !== null){
        alert('Registration successfull! Your login detail has been forwarded to your email and phone number.');
        navigate('/login');
    }

    return (
        <div
            className='w-full flex justify-center items-center h-screen bg-[#c3d0c6]'
        >
            <div className='w-full md:w-[80%] grid lg:grid-cols-2 p-4 md:p-0'>
                <Banner />
        
                <div className='bg-white p-8 lg:p-12'>
                    <div className='mb-12'>
                        <div className='w-full flex justify-center text-3xl text-gray-800 font-medium'><span>Register</span></div>
                        <div className='w-full flex justify-center text-xs text-gray-600 my-1'></div>
                    </div>
                    <span className='text-red-500 text-sm'>{error !== null && error}</span>
                    <form onSubmit={handleRegister}>

                        <div className='grid lg:grid-cols-2'>

                            <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>Email Address</span>
                                <input 
                                    type='email'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Password</span>
                                <input 
                                    type='password'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2'>
                            <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>First Name</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Last Name</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        
                        
                        <div className='grid lg:grid-cols-2'>
                        <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>Phone Number</span>
                                <input 
                                    type='number'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    maxLength={13}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Skills</span>
                                <div className='w-full flex'>
                                    <input 
                                        type='text'
                                        className='grow border border-gray-400 rounded-sm p-1 text-gray-600'
                                        onChange={(e) => setSkill(e.target.value)}
                                        required
                                    />
                                    <HiPlus 
                                        size={35} 
                                        className='bg-[#0259dc] hover:bg-[#2f5081] text-white p-2 cursor-pointer' 
                                        onClick={(e) => addSkill()}
                                    />
                                </div>
                                <div className='w-full flex flex-wrap space-x-3'>
                                {
                                    skills.length === 0 ? <span className='text-xs'>No skill added yet</span> : skills.map( (skl, index) => {
                                        return <div 
                                                    key={index} 
                                                    className='flex items-center space-x-1 my-1 py-0.5 px-2 rounded-md bg-gray-200 text-xs cursor-pointer'
                                                    onClick={(e) => removeSkill(e, skl)}
                                                >
                                                    <span>{skl}</span>
                                                    <AiOutlineCloseCircle size={10} className='text-red-500' />
                                                </div>
                                    })
                                }
                                </div> 
                            </div>
                        </div>

                        <div className="flex items-center my-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-600">I agree to all the <span className="text-[#0259dc]">Terms</span> and <span className='text-[#0259dc]'>Privacy Policy</span></label>
                        </div>
                        
                        <div className='mt-12'>
                            <button className='w-full p-3 rounded-sm bg-[#0259dc] text-white'>
                                {registering ? 'Registering...' : 'Register'}
                            </button>
                            <Navigate />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register