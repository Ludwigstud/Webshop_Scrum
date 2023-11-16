export function isEmail(value){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value)
};

export function isPassword(value){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;
    return regex.test(value);
}

export function isName(value){
    const regex = /^[a-öA-Ö]+(?:[é'-][a-öA-Ö]+)*$/;
    return regex.test(value);
}

export function isConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

