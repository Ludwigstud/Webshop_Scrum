import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import { Link } from 'react-router-dom';
function AddAddress() {
  return (
    <div className='add-address'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 top-nav'>
                    <div className='col-10 col-lg-6 navContainer'>
                        <div className='col-1'>
                            <Link to={"/profile/address"}>
                                <AiOutlineArrowLeft className='go-back-arrow'/>
                            </Link>
                        </div>
                        <div className='col-9'>
                            <p>Add a new address</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 add-address-container">
                    <form  className="col-10 col-md-4">
                        <div className="registrate-input-group">
                            <label className="registrate-user-label" htmlFor="title">
                                Title
                            </label>
                            <div className="registrate-icon-input-container">
                                <input
                                className="registrate-user-input"
                                type="text"
                                id="title"
                                placeholder="Enter address title"
                                
                                />
                            </div>
                        </div>
                        <div className="registrate-input-group">
                            <label className="registrate-user-label" htmlFor="address">
                                Address
                            </label>
                            <div className="registrate-icon-input-container">
                                <input
                                className="registrate-user-input"
                                
                                id="address"
                                placeholder="Enter your address"
                                
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='checkboxContainer'>
                                <label>Home</label>
                                <input type='radio' name="address-tag" value="Home"/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Work</label>
                                <input type='radio' name="address-tag" value="Work"/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Family</label>
                                <input type='radio' name="address-tag" value="Family"/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Other</label>
                                <input type='radio' name="address-tag" value="Other"/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button type="submit" className="sign-in-button btn">Save address</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAddress