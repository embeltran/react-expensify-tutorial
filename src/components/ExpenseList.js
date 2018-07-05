import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="expense-item">
    <div className="expense-list-header">
      <div className="show-mobile">expenses</div>
      <div className="show-desktop">expense</div>
      <div className="show-desktop">amount</div>
      <div className="show-desktop">date</div>
    </div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
