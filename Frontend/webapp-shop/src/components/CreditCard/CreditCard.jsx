import React from "react";

const CreditCard = ({creditCard}) => {
    return (
        <div className="credit-card">
            <div className="front-card">
                <h3 id="main-title">
                <span>{creditCard.provider ? creditCard.provider : "Provider"}</span>

                </h3>
                <i id="globe" className="fa fa-globe"></i>
                <div id="chip"></div>
                <div className="card-info">
                    <p id="no">{creditCard.number}</p>
                    <p id="name">{creditCard.fullName}</p>
                    <p id="exp-date">
                        <span>Expiry Date</span>: {creditCard.expiryDate}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CreditCard;
