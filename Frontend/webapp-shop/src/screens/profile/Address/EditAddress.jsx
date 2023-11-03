import React, { useEffect, useState } from "react";
import { useProfileContext } from "../../../contexts/ProfileContext";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddressValition from "./AddressValition";
import RegisterAddressForm from "../../../components/Address/RegisterAddressForm";
function EditAddress() {
  const { id } = useParams();
  const { getProfileAddress, editProfileAddress, deleteProfileAddress } =
    useProfileContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newAddress, setNewAddress] = useState({});
  const [validation, setValidation] = useState(true);
  const streetNameRegex = /^[A-Za-z0-9\såäöÅÄÖ]{3,}$/;
  const postalCodeRegex = /^(?:SE-)?\d{3}\s?\d{2}$/;
  const cityRegex = /^[A-Za-z]{3,}$/;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const addresses = await getProfileAddress();
        setData(addresses.content.address[id]);
        setNewAddress(addresses.content.address[id]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching addresses");
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

    if (
      streetNameRegex.test(newAddress.streetName) &&
      postalCodeRegex.test(newAddress.postalCode) &&
      cityRegex.test(newAddress.city)
    ) {
      if (Object.keys(editAddress).length >= 1) {
        await editProfileAddress(editAddress);
      }
    } else {
      setValidation(false);
      AddressValition(
        newAddress.streetName,
        newAddress.postalCode,
        newAddress.city,
        newAddress.addressTag
      );
    }
  };

  const deleteAsync = async () => {
    await deleteProfileAddress(data);
  };


  if (loading) {
    return <h1>loading..</h1>;
  }

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
                <h4>Edit:</h4>
                <p className="mb-1">{data.addressTag}</p>
                <p className="mb-1">{data.streetName}</p>
                <p className="mb-1">
                  {data.postalCode} {data.city}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 add-address-container mt-0">
          <RegisterAddressForm validation={validation} handleSubmit={handleSubmit} newAddress={newAddress} setNewAddress={setNewAddress}/> 
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
                onClick={deleteAsync}
                className="sign-in-button btn bg-danger text-white"> Delete address</button>
           </div> 
        </div>
      </div>
    </div>
  );
}

export default EditAddress;
