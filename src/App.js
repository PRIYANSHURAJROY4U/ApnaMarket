import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import React, { useState } from 'react';

function App() {
  const [productList, setProductList] = useState([
    {
      price: 150000,
      name: "Iphone 12 pro",
      qty: 0,
    },
    {
      price: 15000,
      name: "Redmi 12 pro",
      qty: 0,
    }
  ]);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].qty++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className='container mt-6r'>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} />
      </main>
    </>
  );
}

export default App;
