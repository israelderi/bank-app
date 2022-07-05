import React, { useState } from 'react'
import { Link,Navigate,useLocation } from 'react-router-dom';

export default function Register(props) {
    const [id, setid] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [money, setmoney] = useState('');
    const [navToClientPage, setnavToClientPage] = useState(false)
    var path = `/client/${userName}`
    const [thisClient, setthisClient] = useState(props.thisClient)
    const CheckId = (event) => {
        let id = event.target.value;
        Number(id)
        if (!isNaN(id) && id.length === 9) {
            setid(id)
        } 
    }
    const CheckFullName = (event) => {
        let userName = event.target.value;
        if (userName.length > 3) {
            setuserName(userName)
        } 
    }
    const Checkpassword = (event) => {
        let password = event.target.value;
        if (password.length > 5) {
            setpassword(password)
        } 
    }
    const Checkmoney = (event) => {
        let money = event.target.value;
        Number(money)
        if (!isNaN(money) && money <= 1000000) {
            setmoney(money)
        } 
    }
    const create = () => {
        if (id != '' && userName != '' && money != '' && password != '' && password === confirmPassword) {
            props.getData(id, userName, password, money)
            setnavToClientPage(true)
        }
         
        else if(id == ''){
            alert("id noot good") 
        }
        else if(userName  == ''){
            alert("fullName noot good") 
        }
        else if(password  == ''){
            alert("fullName password good") 
        }
        else if(password  != confirmPassword){
            alert("fullName confirmPassword good") 
        }
        else if(money == ''){
            alert("fullName money good") 
        }
        
    }

    return (
        <div>
            <h1>register</h1>
            <input type="text" id='pp'  maxLength = '9' onChange={CheckId} className='InputStyle' placeholder='id' /><br></br>
            <br></br><input type="text" onChange={CheckFullName} className='InputStyle' placeholder='full name' /><br></br>
            <br></br><input type="text" onChange={Checkpassword} className='InputStyle' placeholder='password' /><br></br>
            <br></br><input type="text" onChange={event => setconfirmPassword(event.target.value)} className='InputStyle' placeholder='confirm password' /><br></br>
            <br></br><input type="text" onChange={Checkmoney} className='InputStyle' placeholder='money' /><br></br>
            <br></br><button className='butLinkSend' onClick={create}>{useLocation().pathname === '/Register' ? 'create' : 'edit'}</button><br></br>

            {navToClientPage && <Navigate replace to={path}/>}
        </div>
    )
}
