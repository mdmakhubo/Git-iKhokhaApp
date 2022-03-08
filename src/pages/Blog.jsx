import React from 'react';
import Product from '../components/Product';
import blogImg from '../assets/blog-img.png';

const data = [
        {
            id: 1,
            title: "Blog Title #1",
            image: blogImg,
            desc: "Get access to a custom cash offer after trading for 3 full months."
        },
        {
            id: 2,
            title: "Blog Title #2",
            image: blogImg,
            desc: "Start accepting card payments and offer customers a better way."
        },
        {
            id: 3,
            title: "Blog Title #3",
            image: blogImg,
            desc: "Start accepting card payments and offer customers a better way."
        },
        {
            id: 4,
            title: "Blog Title #4",
            image: blogImg,
            desc: "Sell prepaid products and services using card machine."
        }
        
    ];

const Blog = () => {
    
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

export default Blog;