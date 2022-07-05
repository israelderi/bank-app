import React, { useState } from 'react';
import { Navigate } from 'react-router';



export default function Client(props) {
    const [thisClient, setthisClient] = useState(props.dataClient)
    const [payClient, setpayClient] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [navToClHomePage, setnavToClHomePage] = useState(false)
    const [navToCledit, setnavToCledit] = useState(false)
    const navToClHomePageF = () => {
      setnavToClHomePage(true)
    }
    const watchMoney = () => {
      alert(props.dataClient.money)
    }
    const divPay = () => {
      let showDiv = document.getElementById('ActionPay');
      showDiv.style.display ='block'
    }
    const action =() =>{
      if(payClient != '' && companyName != ''){
        let Client = payClient;
        let company = companyName;
        let pays = {price: Client, company:company }
        let tempClient = props.dataClient.expenses;
       let ClientNewD = tempClient.push(pays)
       props.getData(ClientNewD)
       let showDiv = document.getElementById('ActionPay');
      showDiv.style.display ='none'
      }  
    }
const edit = () =>{
  setnavToCledit(true)
}

  return (
    <div>
        <h1 id='ClienTitel' >hello {props.dataClient.userName}</h1>
        <button className='ActionsClient' onClick={watchMoney}>Balance</button>
        <button className='ActionsClient' onClick={divPay}>Action</button><br />
        <button className='ActionsClient' onClick={edit}>Edit</button>
        <button className='ActionsClient' onClick={navToClHomePageF}>EXIT</button>
        <div id='ActionPay'>
        <input type='text' className='InputStyle' onChange={event => setcompanyName(event.target.value)} placeholder='Enter company Name'/>
        <input type='number' className='InputStyle' placeholder='Pay' onChange={event => setpayClient(event.target.value)}/>
        <button className='butLinkSend' onClick={action}>Pay</button>
        </div>
        {navToClHomePage && <Navigate replace to='/' />}
        {navToCledit && <Navigate replace to='/edit'/>}
    </div>
  )
}
