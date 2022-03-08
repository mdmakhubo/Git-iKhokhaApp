import React from 'react';
import Card from '../components/Card';
import ScrollDiv from '../components/ScrollDiv';
import Content from '../components/ReadMore';
import pic1 from '../assets/56256.png';
import pic2 from '../assets/56217.png';


const Home = () => {    

  return (
    <div className='my-container'>
        <div className='col-lg-12'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='my-title'>
                            <h1>Start new... Today!</h1>
                            <p>With the easy-to-use iKhokha app, you can stay up to date with what’s happening in your business from anywhere, anytime. Sell prepaid products and services</p>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='my-img'>
                            <img src={pic1} alt="about-pic" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='new-title'>
                        <h1>Together We Rise High</h1>                           
                     </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='new-img'>
                            <img src={pic2} alt="about-new-pic" />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='new-title2'>
                            <h5>New Products, New Story</h5>
                            <span>
                                <Content />
                            </span>                       
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='panel-body'>
                <ScrollDiv />
            </div>
            <div className='panel-card'>
                <Card />
            </div>
            <div className='card-btn'>
                <button type='button'>Read More</button>
            </div>            
        </div>        
    </div>
  )
}

export default Home