import React from "react";
import ExpenseForm from './newForm';
import './newExpense.css';
const NewExpense=()=>{
    return(
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    );
}
export default NewExpense;