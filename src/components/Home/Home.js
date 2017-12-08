import React,{ Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        let heading = 'Soaring to new heights ';
        let subheading= 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam   '
        return (
   <div className="home">
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{heading}</h1>
            <div className="columns">
              <div className="column is-three-fifths">
              <h2 className="subtitle">{subheading}</h2>
              </div>
              </div>
              <a href="" className="button is-larg is-primary">Learn More</a>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns pd is-desktop">
          <div className="column is-1">
              <i className="fa fa-cog primary" style={{fontSize: 70}}></i>
          </div>
          <div className="column is-4">
            <p style={{fontSize: 20}}>
              <strong>We provide superior logistic so that your business can succeed in a crazy world !  </strong>
            </p>
          </div>
          <div className="column is-5 is-offset-1">
            <p style={{fontSize: 20}}>
              Lorem ipsumdolors itamet,cons eteturs adipsci ng elitr, sed dia nonumy eirmod tempor invid unt u t labo re et dolore magna aliquyam   
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: 40}}>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="" style={{fontWeight: 'bold' ,fontSize:20}}>" I think it's an absolutely excellent tool for your business i cannot survive without this things "</p>

              <p>- Seyed Alireza</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="" style={{fontWeight: 'bold' ,fontSize:20}}>" I think it's an absolutely excellent tool for your business i cannot survive without this things "</p>
             
              <p>- Seyed Alireza</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="" style={{fontWeight: 'bold' ,fontSize:20}}>" I think it's an absolutely excellent tool for your business i cannot survive without this things "</p>
              
              <p>- Seyed Alireza</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
        );
    }
}

export default Home;