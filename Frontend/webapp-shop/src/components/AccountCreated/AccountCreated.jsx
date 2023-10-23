import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function AccountCreated() {
  return (
    <section className='account-created-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex flex-column'>
                    <div className='icon'>
                        <BiUserCircle className='success-icon'/>
                    </div>

                    <h1 className='mt-5'>Account Created!</h1>
                    <p className='my-4'>Your account had been created successfully.</p>
                    <div className='col-7 col-lg-5'>
                        <Link to={'/signin'}><button className='btn'>Sign in!</button></Link>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
}