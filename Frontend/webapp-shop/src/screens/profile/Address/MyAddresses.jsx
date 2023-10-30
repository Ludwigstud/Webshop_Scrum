import React from 'react'
import {AiOutlineArrowLeft, AiOutlineHome, AiOutlinePlus} from "react-icons/ai";
import {BsPencil} from "react-icons/bs";
import { Link } from 'react-router-dom';
function MyAddresses() {
  return (
    <div className='MyAddresses'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 top-nav'>
                    <div className='col-7 col-lg-6 navContainer'>
                        <div>
                            <Link to={"/profile"}>
                                <AiOutlineArrowLeft className='go-back-arrow'/>
                            </Link>
                        </div>
                        <p>My address</p>
                    </div>
                </div>
                <div className='col-12 address-list-items'>
                    <AiOutlineHome className='address-category-icon'/>
                    <div className='address'>
                        <p>Home</p>
                        <small>8000 S Kirkland Avc, Chicago</small>
                    </div>
                    <Link to={"/profil/address/edit/:id"}>
                        <BsPencil className='edit-adress' />
                    </Link>
                </div>
                <div className='col-12 address-list-items'>
                    <AiOutlineHome className='address-category-icon'/>
                    <div className='address'>
                        <p>Home</p>
                        <small>8000 S Kirkland Avc, Chicago</small>
                    </div>
                    <Link to={"/profil/address/edit/:id"}>
                        <BsPencil className='edit-adress' />
                    </Link>
                </div>
                <div className='col-12 address-list-items'>
                    <AiOutlineHome className='address-category-icon'/>
                    <div className='address'>
                        <p>Home</p>
                        <small>8000 S Kirkland Avc, Chicago</small>
                    </div>
                    <Link to={"/profil/address/edit/:id"}>
                        <BsPencil className='edit-adress' />
                    </Link>
                </div>
                <div className='col-12 add-address'>
                    <div>
                        <Link to={"/profile/address/add"}>
                            <AiOutlinePlus className='add-address-icon'/>
                        </Link>
                        <p>Add a new address</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAddresses