//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

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
				<div>
					<ul class="mb-2">
						<li class="nav-item">
								<Link style={{textDecoration: 'none', color: 'white'}} to="/App">App</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
						
		<Switch>
			<Route path="/About">
				<About/>
			</Route>
			<Route path="/App">
				<Timer/>	
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

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state={
		      session_length : 25,
		      play: 'Start',
		      session_state: 'Session',
			
		}
    		this.session = this.state.session_length + ":00";
 	}
	handleClickTimer(){
	    if(this.state.play === 'Cancel'){
	      this.setState({
		play: 'Start'
	      })
	      clearInterval(window.timer);
	    }
	    else{
	      this.setState({
		play : 'Cancel'
	      })
	      if(window.time_left < this.state.session_length*60){
		var time = window.time_left;
	      }
	      else{
		var time = this.state.session_length*60-1;
	      }
	      window.timer = setInterval(function(){
		let minutes = parseInt(time/60,10);
		let seconds = parseInt(time%60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		const session = document.getElementById('session');
		session.innerText = minutes + ":" + seconds;
		if(--time < 0){
		  clearInterval(window.timer);
		}
		window.time_left = time;
	      },1000)
	    }
  	}
	
	  handleClickIncrement(){
	    /*
	    // TODO: DEBUG
	    if(window.time_left !== this.state.session_length*60){
	      console.log('test');
	      clearInterval(window.timer);
	      this.setState({
		play: 'Start'
	      })
	    }
	    */
	    // max 3 hours
	    if(this.state.session_length < 180){
	      console.log('test2');
	      console.log(this.state.session_length);
	      
	      // this.setState({
	      //   session_length : this.state.session_length + 1
	      // })
	      
	      this.state.session_length += 1;
	      // React.Component.componentDidUpdate(){
	      //   // if(this.state.session_length < 180){
	      //   //   this.setState({
	      //   //     session_length : this.state.session_length + 1
	      //   //   });
	      //   // }
	      //   console.log('componentDidUpdate method is called');
	      // }
	      console.log(this.state.session_length);
	      this.session = this.state.session_length + ":00";
	      document.getElementById('session').innerText = this.session;
	    }
	  }
	  handleClickDecrement(){
	    // min 1 min
	    if(this.state.session_length > 0){
	      this.setState(prevState =>{
		return{
		  session_length: prevState.session_length - 1
		}
	      })
	      this.session = this.state.session_length + ":00";
	      document.getElementById('session').innerText = this.session;
	    }
	  
	  }
		
	render(){
	    return(
	      <div>
		<div id="timer">
		  
		  <div id="application">
		    <div id="session-state">
		      {this.state.session_state}
		    </div>
		    <img src="https://findicons.com/files/icons/2118/nuvola/48/1uparrow.png" alt="up-arrow" onClick={()=>this.handleClickIncrement()} ></img>
		    <div id="session">
		      {this.session}
		    </div>
		    <img src="https://findicons.com/files/icons/2118/nuvola/48/kdevelop_down.png" alt="down-arrow" onClick={()=>this.handleClickDecrement()}></img>
		    <button class="btn btn-success" onClick={()=>this.handleClickTimer()}>
		      {this.state.play}
		    </button>
		  </div>
		</div>
	      </div>
	    )

	}
}

class About extends React.Component{
	constructor(props){
		super(props);
		this.placeholder_css = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '83vh',
		};
	}
	render(){
		return(
			<div class="container" style={this.placeholder_css}> 
				{/*  About */}
				<div>
					<div class="container">
					    Mastery is a solo-developed web application that has the intention to help students achieve their goals.
					</div>
					
				</div>
				<div class="container-fluid">
					<div class="row" style={{justifyContent: 'center'}}>
						<div class="col-3">
							<img src={require("./icons8-loading-bar-60.png")}></img>
							<h5>Tracker</h5>
						</div>
						<div class="col-3">	
							<img src={require("./icons8-graph-64.png")}></img>
							<h5>Stats</h5>
						</div>
						<div class="col-3">
							<img src={require("./icons8-gift-64.png")}></img>
							<h5>Rewards</h5>
						</div>		
					</div>
				</div>
			</div>
		)
	}
}
	
export default App;	
