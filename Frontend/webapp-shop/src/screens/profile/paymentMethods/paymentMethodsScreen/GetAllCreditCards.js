const GetAllCreditCards = async (AddCreditCardSchema) => {
    const res = await fetch(`https://localhost:7042/api/CreditCard/GetAllCreditCard`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(AddCreditCardSchema),
    });
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        console.error('Request failed with status:', res.status);
    }
  };

  export default GetAllCreditCards;