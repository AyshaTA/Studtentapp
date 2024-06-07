import React from 'react'
import NavStudent from './NavStudent'

const AddStudent = () => {
  return (
    <div>
        <NavStudent/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
        </div>
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Ad. No</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Roll No</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="from-label">Parent Name</label><input type="text" className="form-control" /></div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><label htmlFor="" className="form-label">College</label>
            <textarea name="" id="" className="form-control"></textarea></div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DOB</label>
                <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Email id</label>
            <input type="text" className="form-control" /></div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Password</label><input type="password" name="" id="" className="form-control" /></div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label"></label><input type="password" name="" id="" className="form-control" /></div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><button className="btn btn-success">Register</button>
            </div>
        
        </div>
    </div></div>
  )
}

export default AddStudent