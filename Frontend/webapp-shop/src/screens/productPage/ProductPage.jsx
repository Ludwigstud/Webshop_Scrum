import React, { useEffect, useState } from "react";
import NavTopReplace from "../../components/dummyNavBar/NavTopReplace";
import NavBottomReplace from "../../components/dummyNavBar/NavBottomReplace";
import ProductCard from "../../components/products/ProductCard";
import ProductReview from "../../components/products/ProductReview";

const ProductPage = () => {
  

  

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
