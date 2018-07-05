import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <p><Link to={`/edit/${id}`}>
      <span><strong>{description}</strong></span>
      <span>{numeral(amount / 100).format('$0,0.00')}</span>
      <span>{moment(createdAt).format('YYYY-MM-DD')}</span>
    </Link></p>
);

export default ExpenseListItem;
