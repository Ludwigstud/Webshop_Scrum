import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useState} from "react";
import { Link } from "react-router-dom";
import CreditCard from "../../../../components/CreditCard/CreditCard";
const AddCreditCardScreen = () => {
    const [creditCard, SetCreditCard] = useState({name: "", number: "", expiryDate: "", provider: "", cvv: ""});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        SetCreditCard(previousState => {
            return { ...previousState, [name]: value };
        });
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
                            <form className="d-flex flex-column align-items-center justify-content-center">
                                <div className="registrate-input-group my-2 col-12">
                                    <label
                                        className="registrate-user-label"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <div className="registrate-icon-input-container">
                                        <input
                                            className="registrate-user-input"
                                            type="text"
                                            id="name"
                                            placeholder="Enter your Name"
                                            name="name"
                                            value={creditCard.name}
                                            onChange={handleOnChange}
                                        />
                                    </div>
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
                                            placeholder="Enter your First Name"
                                            name="number"
                                            value={creditCard.number}
                                            onChange={handleOnChange}
                                        />
                                    </div>
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
                                                value={creditCard.expiryDate}
                                                onChange={handleOnChange}
                                            />
                                        </div>
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
                                                value={creditCard.ccv}
                                                onChange={handleOnChange}
                                            />
                                        </div>
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
                                </div>

                                <div className="sign-up-button"></div>
                                <button>save card</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCreditCardScreen;
