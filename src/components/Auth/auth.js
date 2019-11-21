import React, { createContext, useState } from 'react';

export const authContext = createContext();

const AuthContextProvider = (props) => {
    const [Auth,SetAuth] = useState([
        {isauth: false}
    ]);
    const [User,setUser] = useState([
        {Name: ''}
    ]);
    const addUser = (name) => {
        SetAuth(true);
        setUser(Auth.isauth ? User.name: name);

    };
    const signOut = () =>{
        setUser('');
        SetAuth(false);
    };
    localStorage.setItem('User',User);
    localStorage.setItem('isAuth',Auth);
    return(
        <authContext.Provider value={{User,addUser,signOut}}>
            {props.children}
        </authContext.Provider>
    )
};
export default AuthContextProvider;


