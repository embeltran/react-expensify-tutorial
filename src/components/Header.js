import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <p>
      <span>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      </span>
      &nbsp;
      <span>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      </span>
      &nbsp;
      <span>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
      </span>
      <button onClick={startLogout}>Log out</button>
    </p>
  </header>
);

const mapDispatchToProps = (dispath) => ({
  startLogout: () => dispath(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
