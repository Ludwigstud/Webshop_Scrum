import React from "react";

const CreditCard = ({creditCard}) => {
    return (
        <div class="credit-card">
            <div class="front-card">
                <h3 id="main-title">
                        <span>{creditCard.provider}</span>
                </h3>
                <i id="globe" class="fa fa-globe"></i>
                <div id="chip"></div>
                <div class="card-info">
                    <p id="no">{creditCard.number}</p>
                    <p id="name">{creditCard.name}</p>
                    <p id="exp-date">
                        <span>Expiry Date</span>: {creditCard.expiryDate}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CreditCard;
