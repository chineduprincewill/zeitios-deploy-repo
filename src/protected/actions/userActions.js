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