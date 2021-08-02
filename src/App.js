//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Timer from "./Timer";
import About from "./About";

class App extends React.Component{
  constructor(props){
    super(props);
		
  }
	  render(){
  	return(
	<Router>
		<nav class="navbar navbar-expand bg-dark">
			<div class="container-fluid">
				<a class = "navbar-brand" href="index.html">
					<Link style={{textDecoration: 'none', color: 'white'}} to="/About">Mastery</Link>
				</a>	
				<ul class="navbar-nav mb-2">
					<li class="nav-item">
						<Link style={{textDecoration: 'none', color: 'white'}} to="/App">App</Link>
					</li>
					<li class="nav-item" style={{marginLeft: '5px'}}>
						<Link style={{textDecoration: 'none', color: 'white'}} to="/LogIn">Log In</Link>
					</li>	
				</ul>
			</div>
		</nav>
		<Switch>
			<Route path="/About">
				<About/>
			</Route>
			<Route path="/App">
				<Timer/>	
			</Route>
			<Route path="/LogIn">
				<LogIn/>
			</Route>
			<Route path="/">
				<Redirect to="/About"/>
			</Route> 

		</Switch>
		<footer class="bg-dark footer-section pt-2 fixed-bottom">
			<div class="container-fluid">
				<div class="row">
					<div class="col-4">
						<h5 class="text-light">Email</h5>
						<p class="text-light">linh.hoangtt99@gmail.com</p>
					</div>
					<div class="col-4">
						<h5 class="text-light">Phone</h5>
						<p class="text-light">+1 514 441 8413</p>
					</div>	
					<div class="col-4">
						<h5 class="text-light">Socials</h5>
						<a href="https://github.com/Linhguinii" target="__blank">
							<img src={require("./GitHub-Mark-32px.png")} alt="github-logo"></img>
						</a>
						<a href="https://www.linkedin.com/in/hoanglinh99/" target="__blank">
            						<img style={{height: '32px', width: '32px'}}src={require("./linkedin.png")} alt="linkedin-logo" class="linkedin-logo"></img>
          					</a>
					</div>
					<div>
						<p style={{fontSize: '10px', color: 'grey'}}>Icons were taken from <a href="https://icons8.com" target="__blank">icons8</a></p>
					</div>
				</div>
			</div>
		</footer>	
	</Router>
 
	)
  }
}



class LogIn extends React.Component{
	constructor(props){
		super(props);
                this.body_css = {
                  background: "#3598dc"
                }
                this.signup_form_css = {
                  width: "400px",
                  margin: "30px auto",
                  marginTop: "0px",
                  height: "100vh"
                }
	}
	render(){
		return(
			<div style={this.body_css}>
                          <div class="signup-form" style={this.signup_form_css}>
                            <form action="" method="post">
                              <h2>Create your account</h2>
                              <div class="form-group">
                                <div class="row">
                                  <div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"></input></div>
                                  <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"></input></div>
                                </div>
                              </div>
                              <div class="form-group">
                                <input type="email" class="form-control" name="email" placeholder="Email" required="required"></input>
                              </div>
                              <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password" required="required"></input>
                              </div>
                              <div class="form-group">
                                <input type="password" class="form-control" name="confirm-password" placeholder="Confirm Password" required="required"></input>
                              </div>
                              <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                              </div>
                            </form>
                            <div class="hint-text">Already have an account? <a href="#">Login here</a></div>
                          </div>
			</div>
		)
	}
}
	
export default App;	
