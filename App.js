import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Mycomponents/Home';
import Register from './Mycomponents/Register';
import Client from './Mycomponents/Client';
import Admin from './Mycomponents/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [clients, setClients] = useState([])

  const getData = (id, username, password, money) => {
    setClients([...clients, {
      id: id,
      userName: username,
      password: password,
      money: money,
      expenses:[]
    }])
  }
  const deleteUser = (userId) =>{
    let tempUsers = [...clients];
    tempUsers.forEach((clinet,i)=>{
      if (clinet.id === userId){
        tempUsers.splice(i,1)
      }
    })
    setClients(tempUsers)
  }
  // const deleteExpense = (reference,userId) =>{
  //   let tempUsers = [...clients];
  //   tempUsers.forEach(clinet=>{
  //     if (clinet.id === userId){
  //       clinet.expenses.splice(reference,1)
  //     }
  //   })
  //   setClients(tempUsers)
  // }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home clients={clients} />} />
          <Route path='/Register' element={<Register getData={getData} />} />
          <Route path='/edit' element={<Register getData={getData}/>} />
          <Route path='/admin' element={<Admin clients={clients} deleteUser={deleteUser} getData={getData}/>} />
          {clients.map(dataClient => {
            //let path = `/client/${dataClient.userName}`
            return <Route path={`/client/${dataClient.userName}`} element={<Client dataClient={dataClient} getData={getData} />} />
          })}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
