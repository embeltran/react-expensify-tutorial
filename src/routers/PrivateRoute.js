import React from 'react';
import { connect } from 'react-redux'; //use redux store to verify authentication
import { Route, Redirect } from 'react-router-dom'; //use route 
import Header from '../components/Header';

//stateless functional export
export const PrivateRoute = ({ 
    // deconstruct route props
    isAuthenticated, 
    component: Component, 
    ...rest // other (rest) props not deconstructed :: rest operator
}) => (
    <Route { ...rest } component={ (props) =>(
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div> //if authenticated
        ) : (
            <Redirect to="/" /> //if not authenticated
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // !!makes string value === boolean value
});

export default connect(mapStateToProps)(PrivateRoute);