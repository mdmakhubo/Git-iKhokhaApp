/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: ""
    }
  }

  notifyError = () => toast.error("Please complete all required fields.");
  notifySuccess = () => toast.success("Form submitted successfully!!!");

  handleSubmit (e) {
    e.preventDefault();

    if(this.state.fullName === "" || this.state.email === "" || this.state.subject === "" || this.state.message === "") {
      this.notifyError()
      return;
    }    
    
    alert(`Name: ${this.state.fullName}, Email: ${this.state.email}, Subject: ${this.state.subject}, Message: ${this.state.message}`);

    this.setState({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    })

    this.notifySuccess()
  };

  handleChange (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }

  render() {

    const {fullName, email, subject, message} = this.state;

    return (
    <div className='contact'>
      <ToastContainer 
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        dark
      />   
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 contact-left">
            <div className="address-grid">
              <h4>Our Address</h4>
              <ul className="address">
                  <li><i className="fa fa-map-marker" aria-hidden="true"></i> 1079 Koma St, Klipspruit, <span>SOWETO.</span></li>
                  <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.co.za"> info@example.co.za</a></li>
                  <li><i className="fa fa-mobile" aria-hidden="true"></i> +27 10 123 4567</li>
              </ul>
            </div>
            <div className="contact-form">              
              <h4>Contact Form</h4>
              <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                  <input type="text" name="fullName" value={fullName} onChange={(e) => this.handleChange(e)} placeholder="Full Name" />
                  <label>Name</label>
                  <span></span>
                </div>
                <div>
                  <input type="email" name="email" value={email} onChange={(e) => this.handleChange(e)} placeholder="Email Address" />
                  <label>Email</label>
                  <span></span>
                </div>
                <div>
                  <input type="text" name="subject" value={subject} onChange={(e) => this.handleChange(e)} placeholder="Subject" />
                  <label>Subject</label>
                  <span></span>
                </div>
                <div>
                  <textarea cols="50" rows="10" name="message" value={message} onChange={(e) => this.handleChange(e)} placeholder="Your Message..." />
                  <label>Message</label>
                  <span></span>
                </div>
                <input type="submit" value="SEND" />
              </form>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 contact-right">
            <h1>WE ARE HERE</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31463.91430310263!2d27.876605592626845!3d-26.2549009998177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a750bd156ff3%3A0xdb66c0541f4cec6d!2sMaponya%20mall!5e0!3m2!1sen!2sza!4v1646665157091!5m2!1sen!2sza" 
            width="100%" height="550" style={{border:0}} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

