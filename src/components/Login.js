import React from 'react';
import { connect } from 'react-redux';
import { startLogin, loginEmail } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div className="box-layout"> 
    <div>
      <h2>expensify</h2>
      <p>tag line</p>      
      <button onClick={startLogin}>Login with Google</button>      
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
/* <button onClick={loginEmail}>Login with Email</button> */
export default connect(undefined, mapDispatchToProps)(Login);