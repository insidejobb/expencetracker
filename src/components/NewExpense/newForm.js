import React,{useState} from "react";
import './newForm.css';

const ExpenseForm = () => {
    // useState[enteredTitle,setEnteredTitle]=useState('');
    // useState[enteredAmount,setEnteredAmount]=useState('');
    // useState[enteredDate,setEnteredDate]=useState('');
    const[userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });

    const titleChangeHandler=(event)=>{
        //setEnteredInput(event.target.value);
        setUserInput({
            ...userInput,
            enterdTitle:event.target.value,
        });
    };

    const amountChangeHandler=(event)=>{
       // setEntereInputnt(event.target.value);
       setUserInput({
            ...userInput,
            enteredAmount:event.target.value,
       });
    }

    const dateChangeHandler=(event)=>{
       // setEnteredDate(event.target.value);
       setUserInput({
        ...userInput,
        enteredDate:event.target.value,
       });

    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <lable>{amountChangeHandler}</lable>
                    <input type='number' min="0.01" step='0.01' />
                </div>
                <div  className="new-expense__control">
                    <lable>{ dateChangeHandler}</lable>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}
export default ExpenseForm;