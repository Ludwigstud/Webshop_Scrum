import React, { useEffect, useState } from "react";
import NavTopReplace from "../dummyNavBar/NavTopReplace";
import NavBottomReplace from "../dummyNavBar/NavBottomReplace";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7042/api/Products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <NavTopReplace />
      <div>
        {data.length > 0 && (
          <div>
            <h1>{data[0].productName}</h1>
            <p>Price: ${data[0].price}</p>
            <img src={data[0].imageUrl} alt="API Image" />
            
          </div>
        )}
      </div>






      

      <NavBottomReplace />
    </>
  );
};

export default ProductPage;
