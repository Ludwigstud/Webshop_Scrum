import React, { useState } from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useProfileContext } from '../../../contexts/ProfileContext';
function AddAddress() {
  const { createProfileAddress} = useProfileContext();
  const [address, setAddress] = useState(null);
  const [postalcode, setPostalCode] = useState(null);
  const [city, setCity] = useState(null);
  const [addressTag, setAddressTag] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressSchema = { streetName: address, postalCode: parseInt(postalcode), city: city, addressTag: addressTag}
    await createProfileAddress(addressSchema);

  }

  const handleRadioButton = (e) => {
    if(e.target.checked)
        setAddressTag(e.target.value)
  }
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
                    <form onSubmit={handleSubmit} className="col-10 col-md-4">
                        
                        <div className="registrate-input-group">
                            <label className="registrate-user-label" htmlFor="address">
                                Address
                            </label>
                            <div className="registrate-icon-input-container">
                                <input
                                className="registrate-user-input"
                                
                                id="address"
                                placeholder="Enter your address"
                                onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="registrate-input-group">
                            <label className="registrate-user-label" htmlFor="postalcode">
                                Postalcode
                            </label>
                            <div className="registrate-icon-input-container">
                                <input
                                className="registrate-user-input"
                                
                                id="address"
                                placeholder="Enter your postalcode"
                                onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="registrate-input-group">
                            <label className="registrate-user-label" htmlFor="city">
                                City
                            </label>
                            <div className="registrate-icon-input-container">
                                <input
                                className="registrate-user-input"
                                
                                id="address"
                                placeholder="Enter your city"
                                onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='checkboxContainer'>
                                <label>Home</label>
                                <input type='radio' name="address-tag" value="Home" onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Work</label>
                                <input type='radio' name="address-tag" value="Work" onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Family</label>
                                <input type='radio' name="address-tag" value="Family" onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Other</label>
                                <input type='radio' name="address-tag" value="Other" onChange={handleRadioButton}/>
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