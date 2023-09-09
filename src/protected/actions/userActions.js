import axios from "../../baseUrl/axios";

export const getUserDetail = async (token, setUserdetail, setError) => {

    try {
      const response = await axios.get('accounts/user/get-user-detail',
      {
        headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
      });
  
      console.log(response.data?.data);
      setUserdetail(response.data?.data);
    } catch (err) {
      if (!err?.response) {
        setError("No Response from Server");
      } else {
        console.log(err.response.data.message.message);
        setError(err.response.data.message.message);
      }
    }
  };


  export const resendEmailOtp = async (token, setOtpResponse, setSendingOtp, setError) => {

    setSendingOtp(true);

    try {
      const response = await axios.get('accounts/user/resend-email-otp',
      {
        headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
      });
  
      console.log(response.data);
      setOtpResponse(response.data);
    } catch (err) {
      if (!err?.response) {
        setError("No Response from Server");
      } else {
        console.log(err.response.data.message.message);
        setError(err.response.data.message.message);
      }
    }
    setSendingOtp(false);
  };


  export const verifyOtp = async (token, otp, setVerified, setVerifyingOtp, setError) => {

    setVerifyingOtp(true);

    try {
      const response = await axios.get(`accounts/user/verify-otp?otp=${otp}`,
      {
        headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
      });
  
      console.log(response.data);
      setVerified(response.data);
    } catch (err) {
      if (!err?.response) {
        setError("No Response from Server");
      } else {
        console.log(err.response.data);
        setError(err.response.data);
      }
    }
    setVerifyingOtp(false);
  };