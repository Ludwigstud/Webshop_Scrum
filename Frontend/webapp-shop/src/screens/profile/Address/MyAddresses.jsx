import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft, AiOutlineHome, AiOutlinePlus} from "react-icons/ai";
import { PiBagLight } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {BsPencil} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useProfileContext } from '../../../contexts/ProfileContext';
function MyAddresses() {
const {getProfileAddress} = useProfileContext();
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const addresses = await getProfileAddress();
                setData(addresses)
                console.log(addresses)
                setLoading(false)
            } catch(error){
                console.error("Error fetching addresses")
            }
        };

        fetchData();
    }, [getProfileAddress]);

    if(loading){
        return <h1>loading..</h1>
    }
    
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
                {data.content.address.map((addressItem, index) => 
                <div className='col-12 address-list-items' key={index}>
                    {addressItem.addressTag === "Home" ? <AiOutlineHome className='address-category-icon'/> : addressItem.addressTag === "Work" ? <PiBagLight className='address-category-icon'/> 
                    : addressItem.addressTag === "Family" ? <MdFamilyRestroom className='address-category-icon'/> : <CiLocationOn className='address-category-icon'/>}
                    
                    <div className='address col-6 d-flex justify-content-center flex-column text-center'>
                        <p>{addressItem.addressTag}</p>
                        <small>{addressItem.streetName}, {addressItem.postalCode}, {addressItem.city}</small>
                    </div>
                    <Link to={`/profile/address/edit/${index}`}>
                        <BsPencil className='edit-adress' />
                    </Link>
                </div>
                )}
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