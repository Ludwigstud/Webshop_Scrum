import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../../contexts/ProfileContext";
import AddressValition from "./AddressValition";
import RegisterAddressForm from "../../../components/Address/RegisterAddressForm";
function AddAddress() {
  const { createProfileAddress } = useProfileContext();
  const [newAddress, setNewAddress] = useState({streetName: "", postalCode: "", city: "", addressTag:null });
  const [validation, setValidation] = useState(true);
  const streetNameRegex = /^[A-Za-z0-9\såäöÅÄÖ]{3,}$/;
  const postalCodeRegex = /^(?:SE-)?\d{3}\s?\d{2}$/;
  const cityRegex = /^[A-Za-z]{3,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressSchema = newAddress

    if (
      streetNameRegex.test(newAddress.streetName) &&
      newAddress.streetName !== null &&
      postalCodeRegex.test(newAddress.postalCode) &&
      cityRegex.test(newAddress.city) &&
      newAddress.addressTag != null
    ) {
      await createProfileAddress(addressSchema);
    } else {
      setValidation(false);
      AddressValition(        newAddress.streetName,
        newAddress.postalCode,
        newAddress.city,
        newAddress.addressTag);
    }
  };


  return (
    <div className="add-address">
      <div className="container">
        <div className="row">
          <div className="col-12 top-nav">
            <div className="col-12 navContainer">
              <div className="back-arrow-div">
                <Link to={"/profile/address"}>
                  <AiOutlineArrowLeft className="go-back-arrow" />
                </Link>
              </div>
              <div className="flex-grow-1 test">
                <p>Add a new address</p>
              </div>
            </div>
          </div>
          <div className="col-12 add-address-container">
            <RegisterAddressForm validation={validation} handleSubmit={handleSubmit} newAddress={newAddress} setNewAddress={setNewAddress}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
