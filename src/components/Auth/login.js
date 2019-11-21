import React, { useState,useContext } from 'react';
import {authContext} from "./auth";
import {Link} from "react-router-dom";

const Login = () => {
    const { addUser } = useContext(authContext);
    const [Name, setName] = useState('');

    const ac = (e) => {
        e.preventDefault();
        addUser(Name);
    };
        return (
            <div className="Login box">
                <h1 className="Text">To-Do Work</h1>
                <p className="name">Enter Your name here:</p>
                <input type="text" name="text" placeholder="Name" required value={Name} 
                       onChange={(e)=>setName(e.target.value)} />
                <div className="Login" onClick={ac}>
                    <button className="btn" > <Link to='/All'>Login</Link></button>
                </div>
            </div>
        );
    }


export default Login;