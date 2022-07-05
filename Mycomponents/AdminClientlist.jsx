import React, { useState } from 'react';
//import { Navigate } from 'react-router';
import Expense from './Expense';

export default function AdminClientlist(props) {
    const [showActions, setShowActions] = useState(false)
    
  return (
   <div className='adminac'>
      <div className='row'>
        <div className='col' >
          id: {props.client.id}
        </div>
        <div className='col'>
        username: {props.client.userName}  
        </div>
        <div className='col'>
          <button className='ctionsAdmin' onClick={()=>{setShowActions(!showActions)}}>Actions</button>
        </div>
      </div>
      <div style={showActions ? {'display':'block'} : {'display':'none'}}>
        <div className='row'>
          {
            props.client.expenses.map(ex=>{
              return <Expense expenses={ex}/>
            })
          }
        </div>
        <div className='row'>
          <div className='col'>
            <button onClick={()=>props.deleteUser(props.client.id)} >Delete User</button>
          </div>
        </div>
      </div>
    </div>
  )
}
