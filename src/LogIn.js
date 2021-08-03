import React from 'react';
import './LogIn.css';

class LogIn extends React.Component{
  constructor(props){
          super(props);
  }
  render(){
    return(
      <div>
        <div class="signup-form">
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

export default LogIn;
