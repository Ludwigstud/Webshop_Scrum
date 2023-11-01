import React from "react";
import { BsChevronLeft, BsPlusLg, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import CreditCardCarousel from "../../../../components/Carousels/CreditCardCarousel/CreditCardCarousel";
const PaymentMethodsScreen = () => {
    const creditCards = [
        {
          provider: "Visa",
          number: "4567 3214 5667 1234",
          fullName: "Dennis Frölander",
          expiryDate: "12/24"
        },
        {
          provider: "Mastercard",
          number: "1234 1234 1324 5678",
          fullName: "Hannes Nilsson Tengnäs",
          expiryDate: "10/23"
        },
      ];
      const emptyCreditCards = [];

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
                        <CreditCardCarousel creditCards={creditCards}/>
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
