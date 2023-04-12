import React from "react";
import './newForm.css';

const ExpenseForm=()=>{
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type='text'></input>
                </div>
                <div className="new-expense__control">
                <lable>Amount</lable>
                <input type='number' min="0.01"/>
                </div>
                <div>
                    <lable>Date</lable>
                    <input type="date" min="2019-01-01" max="2022-12-31"/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

}
export default ExpenseForm;