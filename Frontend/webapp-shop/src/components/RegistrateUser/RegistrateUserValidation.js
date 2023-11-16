import React from "react";
import { RxCross2, RxCheck } from "react-icons/rx";

export const validateOnChange = (values) => {
    const errors = {};
    const regexFirstAndLastName = /^[a-öA-Ö]+(?:[é'-][a-öA-Ö]+)*$/;
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;
    const crossIcon = <RxCross2 className="registrate-user-icon cross-icon" />;
    const checkIcon = <RxCheck className="registrate-user-icon check-icon" />;

    if (!regexFirstAndLastName.test(values.firstName))
        errors.firstNameIcon = crossIcon;
    else {
        errors.firstNameIcon = checkIcon;
    }

    if (!regexFirstAndLastName.test(values.lastName))
        errors.lastNameIcon = crossIcon;
    else {
        errors.lastNameIcon = checkIcon;
    }

    if (!regExEmail.test(values.email)) errors.emailIcon = crossIcon;
    else {
        errors.emailIcon = checkIcon;
    }

    if (!regexPassword.test(values.password)) errors.passwordIcon = crossIcon;
    else {
        errors.passwordIcon = checkIcon;
    }

    if (!values.confirmPassword || values.password !== values.confirmPassword)
        errors.confirmPasswordIcon = crossIcon;
    else {
        errors.confirmPasswordIcon = checkIcon;
    }

    return errors;
};

export const validateOnSubmit = (values) => {
    const errors = {};
    const regexFirstAndLastName = /^[a-öA-Ö]+(?:[é'-][a-öA-Ö]+)*$/;
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;

    if (values.firstName && !regexFirstAndLastName.test(values.firstName))
        errors.firstName = "You must enter a valid first name";

    if (values.lastName && !regexFirstAndLastName.test(values.lastName))
        errors.lastName = "You must enter a valid last name";

    if (values.email && !regExEmail.test(values.email))
        errors.email = "You must enter a valid email";

    if (values.regexPassword && !regexPassword.test(values.password)) {
        errors.password = "You must enter a valid password";
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword =
            "Password and confirm password have to be the same";
    }

    return errors;
};
