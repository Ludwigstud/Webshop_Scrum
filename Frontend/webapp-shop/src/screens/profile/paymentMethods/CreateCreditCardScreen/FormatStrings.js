export const formatCreditCard = (event, SetCreditCard) => {
    var inputValue = event.target.value;
    var formattedValue = inputValue.replace(/\D/g, '').substring(0, 16);
    var regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
    formattedValue = formattedValue.replace(regex, '$1 $2 $3 $4'); 
    SetCreditCard(previousState => {
        return { ...previousState, number: formattedValue };
    });
}

export const formatCVV = (event) => {
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
        return;
    }

    var inputValue = event.target.value;
    var formattedValue = inputValue.replace(/\D/g, '').substr(0, 3);
    event.target.value = formattedValue;
}



export const formatExpiryDate = (event) => {
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/, '0$1/'
    ).replace(
      /^(0[1-9]|1[0-2])$/, '$1/'
    ).replace(
      /^([0-1])([3-9])$/, '0$1/$2'
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/, '$1/$2'
    ).replace(
      /^0+\/|^0+$/, '0'
    ).replace(
        /[^\d/]|^[/]*$/, ''
    ).replace(
      /\/\//g, '/'
    );
  };
  
  