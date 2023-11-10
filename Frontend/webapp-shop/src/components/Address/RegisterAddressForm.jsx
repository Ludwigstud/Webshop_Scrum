import React from 'react'

function RegisterAddressForm({validation, handleSubmit, newAddress, setNewAddress}) {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const handleRadioButton = (e) => {
    if (e.target.checked) {
      setNewAddress((prevAddress) => ({
        ...prevAddress,
        addressTag: e.target.value,
      }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="col-10 col-md-4">
    {!validation ? (
      <div className="col-12 text-center text-danger">
        <p className="mb-1">Validation failed</p>
      </div>
    ) : (
      ""
    )}
    <div className="registrate-input-group">
      <label
        className="registrate-user-label"
        htmlFor="address"
        id="addressLabel"
      >
        Address
      </label>
      <div className="registrate-icon-input-container">
        <input
          className="registrate-user-input"
          name="streetName"
          id="streetName"
          value={newAddress.streetName}
          placeholder="Enter your address"
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </div>
    <div className="registrate-input-group">
      <label
        className="registrate-user-label"
        htmlFor="postalcode"
        id="postalcodeLabel"
      >
        Postalcode
      </label>
      <div className="registrate-icon-input-container">
        <input
          className="registrate-user-input"
          name="postalCode"
          value={newAddress.postalCode}
          id="postalcode"
          placeholder="Enter your postalcode"
          type="text"
          maxLength={5}
          onChange={handleInputChange}
        />
      </div>
    </div>
    <div className="registrate-input-group">
      <label
        className="registrate-user-label"
        htmlFor="city"
        id="cityLabel"
      >
        City
      </label>
      <div className="registrate-icon-input-container">
        <input
          className="registrate-user-input"
          name="city"
          value={newAddress.city}
          id="city"
          placeholder="Enter your city"
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </div>
    <div className="col-12">
      <div className="checkboxContainer">
        <label className='checkboxLabel'>Home</label>
        <input
          type="radio"
          name="addresstag"
          checked={newAddress.addressTag === "Home"}
          value="Home"
          onChange={handleRadioButton}
        />
      </div>
      <div className="checkboxContainer">
        <label className='checkboxLabel'>Work</label>
        <input
          type="radio"
          name="addresstag"
          checked={newAddress.addressTag === "Work"}
          value="Work"
          onChange={handleRadioButton}
        />
      </div>
      <div className="checkboxContainer">
        <label className='checkboxLabel'>Family</label>
        <input
          type="radio"
          name="addresstag"
          checked={newAddress.addressTag === "Family"}
          value="Family"
          onChange={handleRadioButton}
        />
      </div>
      <div className="checkboxContainer">
        <label className='checkboxLabel'>Other</label>
        <input
          type="radio"
          name="addresstag"
          checked={newAddress.addressTag === "Other"}
          value="Other"
          onChange={handleRadioButton}
        />
      </div>
    </div>
    <div className="col-12">
      <button type="submit" className="sign-in-button btn">
        Save changes
      </button>
    </div>
  </form>
  )
}

export default RegisterAddressForm