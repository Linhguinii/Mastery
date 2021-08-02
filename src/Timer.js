import React from 'react';

class Timer extends React.Component{
  constructor(props){
		super(props);
		this.state={
		      session_length : 25,
		      play: 'Start',
		      session_state: 'Session',
			active: false,	
		}
    		this.session = this.state.session_length + ":00";
 	}
	toggleClass(){
		this.setState({
			active: !this.state.active
		})
	}
	handleClickTimer(){
		this.toggleClass();
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
		    <button class={this.state.active ? "btn btn-danger" : "btn btn-success"} onClick={()=>this.handleClickTimer()}>
		      {this.state.play}
		    </button>
		  </div>
		</div>
	      </div>
	    )

	}
  
}

export default Timer;
