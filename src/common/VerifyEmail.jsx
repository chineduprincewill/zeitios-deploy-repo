import React, { useContext, useState } from 'react'
import { resendEmailOtp, verifyOtp } from '../protected/actions/userActions';
import { AuthContext } from '../context/AuthContext';

const VerifyEmail = ({ userdetail }) => {

    const { token } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const [sendingOtp, setSendingOtp] = useState(false);
    const [otpResponse, setOtpResponse] = useState(null);
    const [verified, setVerified] = useState(null);
    const [verifyingOtp, setVerifyingOtp] = useState(false)

    const sendOtp = () => {

      resendEmailOtp(token, setOtpResponse, setSendingOtp, setError)
    }

    const verifyEmail = (otp) => {
      alert(otp);
      verifyOtp(token, otp, setVerified, setVerifyingOtp, setError)
    }


    if(verified !== null){
      alert('Email verified!');
      setVerified(null);
      window.location.reload();
    }

    return (
        <div>
            {
            error !== null ? <span className='text-red-500'>{error}</span> :
            userdetail !== null && userdetail?.email_verified ?
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-12 py-2" role="alert">
                  <p class="text-sm">Email Verified!</p>
                </div> :
                otpResponse !== null && otpResponse?.status === 'success' ? 
                      <div 
                        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-6 py-1.5 shadow-md cursor-pointer" 
                        role="alert"
                        onClick={() => verifyEmail(otpResponse?.otp)}
                      >
                        <div class="flex items-center">
                          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                          <div>
                            <p class="text-sm">{verifyingOtp ? <span className='px-6'>Verifying your Email....</span> : "OTP Sent! Please click to very your Email"}</p>
                          </div>
                        </div>
                    </div> :
                    <div 
                      className="bg-orange-100 hover:bg-orange-200 border-l-4 border-orange-500 text-orange-700 p-3 cursor-pointer" 
                      role="alert"
                      onClick={() => sendOtp()}
                    >
                      <p>{sendingOtp ? <span className='px-10'>Sending Email verification OTP....</span> : 'Email not verified. Click to verify your email'}</p>
                    </div>
          }
          </div>
    )
}

export default VerifyEmail
