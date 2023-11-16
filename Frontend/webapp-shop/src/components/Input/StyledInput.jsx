import React from "react";
import "./_StyledInput.scss";
import { RxCross2, RxCheck } from "react-icons/rx";

const StyledInput = ({ label, id, errorMessage, value, isValid, ...props }) => {
    const hasUserInput = value.trim() !== "";

    return (
        <div className="styled-input-container">
            <label htmlFor={id}>
                {label}
            </label>
            <div className="input-container">
                <input
                    id={id}
                    {...props}
                />
                {hasUserInput && (
                    isValid ? (
                        <RxCheck className="icon check-icon" />
                    ) : (
                        <RxCross2 className="icon cross-icon" />
                    )
                )}
            </div>
            {<div className="error-message">{errorMessage || ""}</div>}
        </div>
    );
};

export default StyledInput;
