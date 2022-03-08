import React from 'react';
import Product from '../components/Product';
import blogImg from '../assets/blog-img.png';

const data = [
        {
            id: 1,
            title: "Product Title #1",
            image: blogImg,
            desc: "Start accepting card payments and offer customers a better way."
        },
        {
            id: 2,
            title: "Product Title #2",
            image: blogImg,
            desc: "Sell prepaid products and services using card machine."
        },
        {
            id: 3,
            title: "Product Title #3",
            image: blogImg,
            desc: "Get access to a custom cash offer after trading for 3 full months."
        },
        {
            id: 4,
            title: "Product Title #4",
            image: blogImg,
            desc: "Start accepting card payments and offer customers a better way."
        },
    ];

const Products = () => {
    
  return (
    <>
      <div className='panel-card product-card'>
        {
          data.map(item => (
            <Product key={item.id} item={item} />
          ))
        }      
      </div>
      <div className='card-btn'>
          <button type='button'>Read More</button>
      </div>
    </>
  )
}

export default Products