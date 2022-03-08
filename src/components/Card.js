import React from 'react'
import blogImg from '../assets/blog-img.png';


const Card = () => {
  return (
    <div className='row row-card'>
        <div className="card" style={{width: "18rem"}}>
            <img src={blogImg} className="card-img-top" alt="blog-img" />
            <div className="card-body">
                <h5 className="card-title">Blog Title #1</h5>
                <p className="card-text">Start accepting card payments and offer customers a better way.</p>
            </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src={blogImg} className="card-img-top" alt="blog-img" />
            <div className="card-body">
                <h5 className="card-title">Blog Title #2</h5>
                <p className="card-text">Sell prepaid products and services using card machine.</p>
            </div>
        </div>
        <div className="card sm-view" style={{width: "18rem"}}>
            <img src={blogImg} className="card-img-top" alt="blog-img" />
            <div className="card-body">
                <h5 className="card-title">Blog Title #3</h5>
                <p className="card-text">Get access to a custom cash offer after trading for 3 full months.</p>
            </div>
        </div>
        <div className="card sm-view" style={{width: "18rem"}}>
            <img src={blogImg} className="card-img-top" alt="blog-img" />
            <div className="card-body">
                <h5 className="card-title">Blog Title #4</h5>
                <p className="card-text">Start accepting card payments and offer customers a better way.</p>
            </div>
        </div>
    </div>
  )
}

export default Card