import React, { useState } from 'react'
import NavStudent from './NavStudent'


const ViewAllStudent = () => {
  const [data,changeData]=useState(
  [
   {"name":"Aju","adno":2}, 
   {"name":"Anu","adno":32}, 
   {"name":"Ammu","adno":12} 
  ]
)
  return (

    <div>
      <NavStudent />
      <div className="container">
        <div className="row g-3">
      
          {
          data.map(
            (value,index)=> {
              return (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <img src="https://t4.ftcdn.net/jpg/05/52/94/89/360_F_552948967_rfWkVCstu3t9ypSnpt2ZePVnuqoi6D6o.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Name : {value.name}</h5>
                <p class="card-text">AdNo : {value.adno}</p>
                <a href="#" class="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
            )
        }
      )
}
          
        </div>
      </div>
      </div>
  )
}

export default ViewAllStudent