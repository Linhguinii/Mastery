//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Timer from "./Timer";
import About from "./About";
import Login from "./Login";

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
						<Link style={{textDecoration: 'none', color: 'white'}} to="/Login">Login</Link>
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
			<Route path="/Login">
				<Login/>
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
	
export default App;	
