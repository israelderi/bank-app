import React from 'react'

export default function (props) {
  return (
    <div className='row ex'>
    <div className='col'>company: {props.expenses.company}</div>
    <div className='col'>price: {props.expenses.price}</div>
    <div className='col' >
        <button className='remove'>X</button>
    </div>
</div>
  )
}
