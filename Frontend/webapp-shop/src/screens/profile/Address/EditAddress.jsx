import React, { useEffect, useState } from 'react'
import { useProfileContext } from '../../../contexts/ProfileContext';
import { useParams } from 'react-router-dom';
import {AiOutlineArrowLeft} from "react-icons/ai";
import { Link } from 'react-router-dom';
function EditAddress() {
const { id } = useParams();
const {getProfileAddress, editProfileAddress} = useProfileContext();
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [newAddress, setNewAddress] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try{
                const addresses = await getProfileAddress();
                setData(addresses.content.address[id])
                setNewAddress(addresses.content.address[id])
                setLoading(false)
            } catch(error){
                console.error("Error fetching addresses")
            }
        };

        fetchData();
    }, [getProfileAddress, id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const editAddress = {
          newAddress: newAddress,
          currentAddress: data,
        };
        if(Object.keys(editAddress).length >= 1)
        {
            await editProfileAddress(editAddress);
        }

      }


      
      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewAddress(previous => {
            return {...previous, [name]: value}
        })
      };

      const handleRadioButton = (e) => {
        if (e.target.checked) {
            setNewAddress((prevAddress) => ({
            ...prevAddress,
            addressTag: e.target.value
          }));
        } 
      };

    if(loading){
        return <h1>loading..</h1>
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
                    </div>
                </div>
                <div className='col-12 text-center '>
                    <h4>Edit:</h4>
                    <p>{data.addressTag}</p>
                    <p>{data.streetName}</p>
                    <p>{data.postalCode} {data.city}</p>
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
                                name='streetName'
                                id="address"
                                value={newAddress.streetName}
                                placeholder="Enter your address"
                                type='text'
                                onChange={handleInputChange}
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
                                name='postalCode'
                                value={newAddress.postalCode}
                                id="postalcode"
                                placeholder="Enter your postalcode"
                                type='text'
                                onChange={handleInputChange}
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
                                name='city'
                                value={newAddress.city}
                                id="city"
                                placeholder="Enter your city"
                                type='text'
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='checkboxContainer'>
                                <label>Home</label>
                                <input type='radio' name="addresstag" checked={newAddress.addressTag === "Home"} value="Home"  onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Work</label>
                                <input type='radio' name="addresstag" checked={newAddress.addressTag === "Work"} value="Work" onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Family</label>
                                <input type='radio' name="addresstag" checked={newAddress.addressTag === "Family"} value="Family" onChange={handleRadioButton}/>
                            </div>
                            <div className='checkboxContainer'>
                                <label>Other</label>
                                <input type='radio' name="addresstag" checked={newAddress.addressTag === "Other"} value="Other"  onChange={handleRadioButton}/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button type="submit" className="sign-in-button btn">Save changes</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditAddress