import React, { useState } from "react";
import ExpenseForm from './newForm';
import './newExpense.css';
const NewExpense = (props) => {
  const [IsEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const stratEdingHandler = () => {
    setIsEditing(true);
  };
  const stopEdintingHandler=()=>{
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!IsEditing &&(
        <button onClick={stratEdingHandler}>Add new Expense</button>
       )}
      {IsEditing && (
      <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEdintingHandler} 
      />
      )}
    </div>
  );
};
export default NewExpense;