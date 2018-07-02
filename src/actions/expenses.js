import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// REMOVE_EXPENSE
export const startRemoveExpenses = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    }).catch((e) => {
      console.log('This failed:' , e );
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
// UPDATE EXPENSE
export const startEditExpenses = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense( id, updates ));
    }).catch((e) => {
      console.log('This failed:' , e );
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// fetch data
export const startSetExpenses = () => {
  return (dispatch, getState) => {
  const uid = getState().auth.uid;
    // connect to DB . fetch data 
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) =>{
      const expenses = [];
      //expenseSnapshot can also be childSnapshot === parse the data
      snapshot.forEach((expenseSnapshot) =>{
        expenses.push({
          id: expenseSnapshot.key, 
          ...expenseSnapshot.val() 
        });
      });
      //dispatch (show) setExpanses
      dispatch(setExpenses(expenses));

    });
  };
};
