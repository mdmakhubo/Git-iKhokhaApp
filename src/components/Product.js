import React from 'react';

const Product = ({item}) => {
    const {image, title, desc} = item;

  return (
    <div className='row row-card'>
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="blog-img" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </div>
        </div>
      </div>
  )
}

export default Product