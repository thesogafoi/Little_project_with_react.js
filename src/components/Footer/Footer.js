import React  from 'react';
import'./Footer.css';
const Footer = () => {
    return (
      <div className="App">
      <div className="footer is-primary">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p>some text in the footer that we have it hahah some text in the footer that we have it hahah </p>
          </div>
          <div className="column has-text-right">
            <a href=""  className="icon"><i className="fa fa-facebook"></i></a>
            <a href="#" className="icon"><i className="fa fa-instagram"></i></a>
            <a href="#" className="icon"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Footer;
