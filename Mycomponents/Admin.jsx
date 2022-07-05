import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AdminClientlist from './AdminClientlist'
export default function Admin(props) {
  const [clientdata, setclientdata] = useState(props.clients);

  return (
    <div>
        <h1 className='homeTitel'>Manager</h1>
        {
            props.clients.map((client,i)=>{
              if (client.id.length > 8){
                 return <AdminClientlist deleteUser={props.deleteUser} key={i} client={client}/>
              }  
            })
        }
        <Link to='/'><button className='butLinkSend'>Home</button></Link>
    </div>
  )
}
