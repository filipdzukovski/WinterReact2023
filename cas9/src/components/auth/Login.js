import React,{useState} from 'react';
import {logInToApp} from './duck/operations';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export const Login = () => {
    const [logInData,setLoginInData] = useState({email:"",password:""})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logIn = async() =>{
        try{
            await dispatch(logInToApp(logInData.email,logInData.password));
            navigate('/users');
        }   
        catch(err){
            alert(err)
        }
    }
    return(
        <div id="login">
            <label>Email</label>
            <input
                type='text'
                placeholder='Enter Username'
                value={logInData.email}
                onChange={(e)=>{setLoginInData({...logInData,email:e.target.value})}}
            />
            <br/>
            <br/>
            <label>Password</label>
            <input
                type='password'
                placeholder='Enter Password'
                value={logInData.password}
                onChange={(e)=>{setLoginInData({...logInData,password:e.target.value})}}
            />
            <br/>
            <br/>
            <button onClick={logIn}>Login</button>
        </div>
    )
}