import React from 'react'

function AddressValition(address, postalcode, city, addressTag) {
    const streetNameRegex = /^[A-Za-z0-9\såäöÅÄÖ]{3,}$/;
    const postalCodeRegex = /^(?:SE-)?\d{3}\s?\d{2}$/;
    const cityRegex = /^[A-Za-z]{3,}$/

    if(!streetNameRegex.test(address) || address === null)
          document.getElementById("addressLabel").style.color = "red";
           else
            document.getElementById("addressLabel").style.color = "black";
        
        if(!postalCodeRegex.test(postalcode) || postalcode === null)
           document.getElementById("postalcodeLabel").style.color = "red";
        else
            document.getElementById("postalcodeLabel").style.color = "black";
        
        if(!cityRegex.test(city) || city === null)
           document.getElementById("cityLabel").style.color = "red";
        else
            document.getElementById("cityLabel").style.color = "black";
        if (addressTag === null) {
            let checkboxes = document.querySelectorAll(".checkboxLabel");
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].style.color = "red";
            }
        } else {
            let checkboxes = document.querySelectorAll(".checkboxLabel");
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].style.color = "black";
            }
        }     
}

export default AddressValition