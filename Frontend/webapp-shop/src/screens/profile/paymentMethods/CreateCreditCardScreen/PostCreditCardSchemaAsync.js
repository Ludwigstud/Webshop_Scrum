import { getAccessToken } from "../../../../helpers/getAccessToken";
const PostCreditCardSchemaAsync = async (AddCreditCardSchema) => {
    const token = getAccessToken();
    const res = await fetch(`https://localhost:7042/api/CreditCard/AddCreditCard`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(AddCreditCardSchema),
    });
    if (res.status === 201) {
    }
  };

  export default PostCreditCardSchemaAsync;