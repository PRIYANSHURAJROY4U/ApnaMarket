import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  const { productList, incrementQuantity } = props;

  return (
    <>
      {productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          incrementQuantity={incrementQuantity}
          index={index}
        />
      ))}
    </>
  );
}
