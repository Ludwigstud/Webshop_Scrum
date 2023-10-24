import React, { useEffect, useState } from "react";
import NavTopReplace from "../../components/dummyNavBar/NavTopReplace";
import NavBottomReplace from "../../components/dummyNavBar/NavBottomReplace";
import ProductCard from "../../components/products/ProductCard";
import ProductReview from "../../components/products/ProductReview";

const ProductPage = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://localhost:7042/api/Products")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      <NavTopReplace />

      <ProductCard />
      <ProductReview />
      <ProductReview />

      <NavBottomReplace />
    </>
  );
};

export default ProductPage;
