import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import React, {useState} from 'react';


function App() {
  const productList = [
    {
      price:150000,
      name : "Iphone 12 pro",
      qty: 0,
    },
    {
      price:15000,
      name : "Redmi 12 pro",
      qty: 0,
    }
  ]

     [productList , setProductList] = useState([]);

   const incrementquantity = (index) => {
    let newproductList = [...productList]
    newproductList[index].qty++
    setProductlist(newproductList);
   }
  return (
    <>
    <Navbar/>
    <main className='container mt-6r'> 
    <ProductList productList={productList}  incrementquantity={incrementquantity}/>
    </main>
     </>
  );
}

export default App;
