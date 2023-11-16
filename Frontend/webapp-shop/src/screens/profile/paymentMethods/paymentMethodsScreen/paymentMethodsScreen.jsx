import React, { useEffect } from 'react';
import { BsChevronLeft, BsPlusLg, BsPencil } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import CreditCardCarousel from "../../../../components/Carousels/CreditCardCarousel/CreditCardCarousel";
import useFetch from '../../../../hooks/useFetch';
import { getAccessToken } from '../../../../helpers/getAccessToken';


const PaymentMethodsScreen = () => {
    const creditCards = useFetch(`https://localhost:7042/api/CreditCard/GetAllCreditCard`);
    const authToken = getAccessToken();
    const navigate = useNavigate();
    useEffect(() => {
        if(!authToken){
            navigate("/signin")
        }
    })

    if(creditCards.isLoading){
        return <p>Loading....</p>
    }

    return (
        <section className="payment-methods-section my-3">
            <div className="container">
                <div className="d-flex align-items-center my-5">
                    <div className="mr-3">
                        <Link to={"/profile"}>
                            <i>
                                <BsChevronLeft />
                            </i>
                        </Link>
                    </div>
                    <div className="flex-grow-1">
                        <h2 className="text-center">Payments method</h2>
                    </div>
                </div>
                <div className="row payment-methods-container d-flex justify-content-center">
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3 payment-methods-column">
                        <div className="d-flex align-items-center">
                            <h3>Cards</h3>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to={"/profile/paymentmethods/addcreditcard"}>
                                Add a new card <BsPlusLg />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {<CreditCardCarousel creditCards={creditCards.data.content}/>}
                    </div>
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3 payment-methods-column">
                        <div className="d-flex align-items-center">
                            <h3>Apple Pay</h3>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to={"/profile/paymentmethods/addcreditcard"}>
                                <BsPencil />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3 payment-methods-column">
                        <div className="d-flex align-items-center">
                            <h3>PayPal</h3>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to={"/profile/paymentmethods/addcreditcard"}>
                                <BsPencil />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethodsScreen;
