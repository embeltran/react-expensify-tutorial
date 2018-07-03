import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <p>
      <strong><Link to={`/edit/${id}`}>{description}</Link></strong>
      {numeral(amount / 100).format('$0,0.00')}
      &nbsp;
      {moment(createdAt).format('YYYY-MM-DD')}
    </p>
);

export default ExpenseListItem;
