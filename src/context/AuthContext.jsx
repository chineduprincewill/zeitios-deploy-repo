import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const userData = JSON.parse(localStorage.getItem('logged_in'));
    //const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    
    const [token, setToken] = useState(userData ? userData?.access : '');
    const [user_id, setUser_id] = useState(userData ? userData?.user_id : null);
    const [user_email, setUser_email] = useState(userData ? userData?.email : null);
    const [user_username, setUser_username] = useState(userData ? userData?.username : null);
    const [user_role, setUser_role] = useState(userData ? userData?.category : null);
    const [shownav, setShownav] = useState(false);

    const logout = () => {
        setToken('');
        setUser_email(null);
        setUser_id(null);
        setUser_username(null);
        setUser_role(null);
        localStorage.removeItem('logged_in');
        window.location.reload();
    }

    /**const updateActivenav = (val) => {
        setActivenav(val);
    }*/

    useEffect(() => {
        
        if(localStorage.getItem('logged_in')){
            
            setToken(userData?.access);
            setUser_email(userData?.email);
            setUser_id(userData?.user_id);
            setUser_role(userData?.category);
            setUser_username(userData?.username);
        }
    }, [])

    const updateShownav = () => {
        setShownav(!shownav);
    }


    return(
        <AuthContext.Provider value={{ token, user_role, user_id, user_email, user_username, shownav, updateShownav, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider