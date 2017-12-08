import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
class Header extends Component {
  constructor(props){
    super(props);
    this.state= {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    let menuActive = this.state.istoggleOn ? 'is-active' : '';
    return (
      <div className="App">
    <nav className="navbar is-transparent has-shadow is-transparent">
     <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item logo-navbar" href="/">MyCompanyLogo</a>
      <div className="navbar-burger burger " onClick={this.handleClick} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>  
  <div className={"navbar-menu"+menuActive}>
    <div className="navbar-end">
        <Link className="navbar-item" to='/'>Home</Link>

        <Link className="navbar-item" to='/'>Features</Link>
      
        <Link className="navbar-item" to='/'>About</Link> 

        <Link className="navbar-item" to='/faq'>FAQ</Link>
    
      </div>
  </div>    
    <div className="navbar-end">
      <div className="navbar-item">
        <a href="" className="button is-primary is-outlined ">
          <span className="fa fa-download"> </span><span> </span>
          <span>  Join Now</span>
          </a>
      </div>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Header;
