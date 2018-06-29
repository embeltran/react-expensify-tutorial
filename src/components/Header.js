import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
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
    </p>
  </header>
);

export default Header;
