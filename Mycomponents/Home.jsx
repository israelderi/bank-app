import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { Navigate } from 'react-router';


export default function Home(props) {
  const [userName, setuserName] = useState('');
  const [userpassword, setuserpassword] = useState('');
  const [dataClients, setdataClients] = useState(props.clients);
  const [navToClientPage, setnavToClientPage] = useState(false)
  const [navToAdmin, setnavToAdmin] = useState(false)
  
  var path = `/client/${userName}`

  const bankerUser = () => {
  if (userName === 'admin' && userpassword === 'admin'){
    setnavToAdmin(true)
  }
  else{
    {dataClients.map(dataClient => {
      if(dataClient.userName == userName && dataClient.password == userpassword){
        setnavToClientPage(true)
      }
    })}
  }
}
  return (
    <div className='homePage'>
        <h1 className='homeTitel'>bank iL</h1> <hr></hr><br></br>
        <input type="text" className='InputStyle' onChange={event => setuserName(event.target.value)} placeholder='User name'/><br></br>
        <br></br><input type="text" className='InputStyle'onChange={event => setuserpassword(event.target.value)} placeholder='Password'/><br></br>
        <br></br><Link to="/Register"><button className='butLinkNewCreate'>create New User</button></Link><br></br>
        <br></br><button onClick={bankerUser}className='butLinkSend'>send</button>

        {/* NAV */}
      {navToAdmin && <Navigate replace to="/admin"/>}
      {navToClientPage && <Navigate replace to={path}/>}
    </div>
  )
}
