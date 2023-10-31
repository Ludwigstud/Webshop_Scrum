import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useState} from "react";
import { Link } from "react-router-dom";
import CreditCard from "../../../../components/CreditCard/CreditCard";
import PostCreditCardSchemaAsync from "./PostCreditCardSchemaAsync";
import {formatCVV, formatCreditCard, formatExpiryDate} from './FormatStrings'
import { validateOnChange, validateOnSubmit } from "./AddCreditCardValidations"; 
const AddCreditCardScreen = () => {
    const [creditCard, SetCreditCard] = useState({fullName: "", number: "", expiryDate: "", provider: "", cvv: ""});
    const [formErrorIcons, setFormErrorIcons] = useState({});
    const [formErrors, setFormErrors] = useState({});


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        SetCreditCard(previousState => {
            return { ...previousState, [name]: value };
        });
        var errorIcons = validateOnChange({ ...creditCard, [name]: value})
        setFormErrorIcons(errorIcons);

        setFormErrors(previousErrors => ({
            ...previousErrors,
            [name]: ""
        }));
    }

      

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateOnSubmit(creditCard);
        const registrateCard  = {
            fullName: creditCard.fullName,
            number: creditCard.number,
            expiryDate: creditCard.expiryDate,
            provider: creditCard.provider,
            paymentType: "Creditcard",
            cvv: parseInt(creditCard.cvv)
        };

        if(Object.keys(errors).length === 0)
        {
            await PostCreditCardSchemaAsync(registrateCard);
            console.log(registrateCard)
        }
        else {
            setFormErrors(errors);
        }
        
    }


    return (
        <section className="add-credit-card">
            <div className="container">
                <div className="d-flex align-items-center my-5">
                    <div className="mr-3">
                        <Link to={"/profile/paymentmethods"}>
                            <i>
                                <BsChevronLeft />
                            </i>
                        </Link>
                    </div>
                    <div className="flex-grow-1">
                        <h2 className="text-center">Add a new card</h2>
                    </div>
                </div>
                <div>
                    <CreditCard creditCard={creditCard} />
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center">
                                <div className="registrate-input-group my-2 col-12">
                                    <label
                                        className="registrate-user-label"
                                        htmlFor="fullName"
                                    >
                                        Full Name
                                    </label>
                                    <div className="registrate-icon-input-container">
                                        <input
                                            className="registrate-user-input"
                                            type="text"
                                            id="fullName"
                                            placeholder="Enter your Name"
                                            name="fullName"
                                            value={creditCard.fullName}
                                            onChange={handleOnChange}
                                        />
                                        {formErrorIcons.fullName}
                                    </div>
                                    <div className="error-message">{formErrors.fullName}</div>
                                </div>
                                <div className="registrate-input-group my-2 col-12">
                                    <label
                                        className="registrate-user-label"
                                        htmlFor="number"
                                    >
                                        Card number
                                    </label>
                                    <div className="registrate-icon-input-container">
                                        <input
                                            className="registrate-user-input"
                                            type="text"
                                            id="number"
                                            placeholder="Enter your credit card number"
                                            name="number"
                                            value={creditCard.number}
                                            onChange={handleOnChange}
                                            onKeyUp={(e) => formatCreditCard(e, SetCreditCard)}
                                            maxLength={19}
                                        />
                                        {formErrorIcons.number}
                                    </div>
                                    <div className="error-message">{formErrors.number}</div>
                                </div>
                                <div className="d-flex flex-wrap w-100 justify-content-between">
                                    <div className="registrate-input-group my-2 col-5">
                                        <label
                                            className="registrate-user-label"
                                            htmlFor="expiryDate"
                                        >
                                            MM/yy
                                        </label>
                                        <div className="registrate-icon-input-container">
                                            <input
                                                className="registrate-user-input"
                                                type="text"
                                                id="expiryDate"
                                                placeholder="MM/yy"
                                                name="expiryDate"
                                                maxLength={5}
                                                value={creditCard.expiryDate}
                                                onChange={handleOnChange}
                                                onKeyUp={(e) => formatExpiryDate(e)}
                                            />
                                            {formErrorIcons.expiryDate}
                                        </div>
                                        <div className="error-message">{formErrors.expiryDate}</div>
                                    </div>
                                    <div className="registrate-input-group my-2 col-5">
                                        <label
                                            className="registrate-user-label"
                                            htmlFor="cvv"
                                        >
                                            CVV
                                        </label>
                                        <div className="registrate-icon-input-container">
                                            <input
                                                className="registrate-user-input"
                                                type="text"
                                                id="cvv"
                                                placeholder="cvv"
                                                name="cvv"
                                                value={creditCard.cvv}
                                                onChange={handleOnChange}
                                                onKeyUp={(e) => formatCVV(e)}
                                                maxLength={3}
                                            />
                                            {formErrorIcons.cvv}
                                        </div>
                                        <div className="error-message">{formErrors.cvv}</div>
                                    </div>
                                </div>
                                <div className="registrate-input-group my-2 col-12">
                                    <label
                                        className="registrate-user-label"
                                        htmlFor="cardType"
                                    >
                                        Card Type
                                    </label>
                                    <div className="registrate-icon-input-container">
                                        <select
                                            className="registrate-user-input"
                                            id="provider"
                                            name="provider"
                                            value={creditCard.provider}
                                            onChange={handleOnChange}
                                        >
                                            <option defaultValue="invalid">Choose a card</option>
                                            <option value="Visa">Visa</option>
                                            <option value="Mastercard">
                                                Mastercard
                                            </option>
                                        </select>
                                    </div>
                                    <div className="error-message">{formErrors.provider}</div>
                                </div>
                                

                                <div className="sign-up-button"></div>
                                <button>Save card</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCreditCardScreen;
