import React from 'react'
import { RxCross2, RxCheck } from "react-icons/rx";



export const validateOnChange = (values) => {
    const errors = {}
    const fullName = /^[a-zA-ZöäüÖÄÜ]{2,}([' ][a-zA-ZöäüÖÄÜ]{2,})*$/;
    const regexCreditCardNumber = /^(\d{4}\s?){3}\d{4}$/;
    const regexExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3}$/
    const crossIcon = <RxCross2 className="registrate-user-icon cross-icon"/>;
    const checkIcon = <RxCheck className="registrate-user-icon check-icon" />;

    if (!fullName.test(values.fullName))
        errors.fullName = crossIcon;
    else {
        errors.fullName = checkIcon;
    }

    if (!regexCreditCardNumber.test(values.number))
        errors.number = crossIcon;
    else {
        errors.number = checkIcon;
    }

    if (!regexExpiryDate.test(values.expiryDate))
        errors.expiryDate = crossIcon;
    else {
        errors.expiryDate = checkIcon;
    }
    if (!regexCVV.test(values.cvv))
        errors.cvv = crossIcon;
    else {
        errors.cvv = checkIcon;
    }

    return errors;
};

export const validateOnSubmit = (values) => {
    const errors = {}
    const fullName = /^[a-zA-ZöäüÖÄÜ]{2,}([' ][a-zA-ZöäüÖÄÜ]{2,})*$/;
    const regexCreditCardNumber = /^(\d{4}\s?){3}\d{4}$/;
    const regexExpiryDate = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCVV = /^\d{3}$/;

    if(!fullName.test(values.fullName))
        errors.fullName = "You must enter a valid full name.";

    if(!regexCreditCardNumber.test(values.number))
        errors.number = "You must enter a valid creditcard number.";

    if(!regexExpiryDate.test(values.expiryDate))
        errors.expiryDate = "You must enter an valid expiry date.";

    if(!regexCVV.test(values.cvv))
        errors.cvv = "You must enter a valid cvv";

    if(values.provider === "Choose a card")
        errors.provider = "You need to choose a creditcard provider"
    return errors;
};
