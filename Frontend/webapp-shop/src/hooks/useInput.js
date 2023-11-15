import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const onChangeValueIsValid = validationFn(enteredValue);
    const onSubmitValueIsValid = validationFn(enteredValue);

    const handleOnChange = (event) => {
        setEnteredValue(event.target.value);
        setDidEdit(true);
        setDidSubmit(false);
    };

    const handleSubmit = async () => {
        setDidSubmit(true);
        return onSubmitValueIsValid;
    };

    return {
        value: enteredValue,
        handleOnChange,
        handleSubmit,
        onChangeHasError: didEdit && !onChangeValueIsValid,
        onSubmitHasError: didSubmit && !onSubmitValueIsValid,
    };
}

export const useInputField = (initialValue, validator) => {
    const {
        value,
        handleOnChange,
        handleSubmit,
        onChangeHasError,
        onSubmitHasError,
    } = useInput(initialValue, validator);

    return {
        value,
        handleOnChange,
        handleSubmit,
        onChangeHasError,
        onSubmitHasError,
    };
};