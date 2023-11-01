const PostCreditCardSchemaAsync = async (AddCreditCardSchema) => {
    const res = await fetch(`https://localhost:7042/api/CreditCard/AddCreditCard`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(AddCreditCardSchema),
    });
    if (res.status === 201) {
      window.location.replace("/profile/paymentmethods");
    }
  };

  export default PostCreditCardSchemaAsync;