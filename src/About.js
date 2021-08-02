import React from 'react';

class About extends React.Component{
	constructor(props){
		super(props);
		this.placeholder_css = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			height: '83vh',
		};
	}
	render(){
		return(
                  <div style={this.placeholder_css}>
                      <div class="d-flex justify-content-center"> 
                              {/*  About */}
                              <div>
                                      <div>
                                          Mastery is a solo-developed web application that has the intention to help students achieve their goals.
                                      </div>
                                      
                              </div>
                      </div>
                      <div class="d-flex justify-content-around">
                                      <div>
                                              <img src={require("./icons8-loading-bar-60.png")}></img>
                                              <h5>Tracker</h5>
                                      </div>
                                      <div>	
                                              <img src={require("./icons8-graph-64.png")}></img>
                                              <h5>Stats</h5>
                                      </div>
                                      <div>
                                              <img src={require("./icons8-gift-64.png")}></img>
                                              <h5>Rewards</h5>
                                      </div>		
                      </div>
                  </div>
		)
	}
}

export default About;
