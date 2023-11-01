import React from "react";
import { BsChevronLeft, BsPlusLg, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
const PaymentMethodsScreen = () => {
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
                <div className="row payment-methods-column d-flex justify-content-center">
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3">
                        <div className="d-flex align-items-center">
                            <h3>Cards</h3>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to={"/profile/paymentmethods/addcreditcard"}>
                                Add a new card <BsPlusLg />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3">
                        <div className="d-flex align-items-center">
                            <h3>Apple Pay</h3>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link to={"/profile/paymentmethods/addcreditcard"}>
                                <BsPencil />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 d-flex align-items-center justify-content-between py-3">
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
