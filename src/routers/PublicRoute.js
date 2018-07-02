import React from 'react';
import { connect } from 'react-redux'; //use redux store to verify authentication
import { Route, Redirect } from 'react-router-dom'; //use route 

//stateless functional export
export const PublicRoute = ({ 
    // deconstruct route props
    isAuthenticated, 
    component: Component, 
    ...rest // other (rest) props not deconstructed :: rest operator
}) => (
    <Route { ...rest } component={ (props) =>(
        isAuthenticated ? (
            <Redirect to="/dashboard" /> //if not authenticated
        ) : ( 
            <Component {...props} />//if authenticated
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // !!makes string value === boolean value
});

export default connect(mapStateToProps)(PublicRoute);