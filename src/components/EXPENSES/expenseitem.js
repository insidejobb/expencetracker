import React,{ useState} from 'react';
import ExpenseDate from './expenseDate';
import Card from '../UI/Card';
import './expenseitem.css';

const ExpenseItem=(props)=> {
   const [amount,setAmount]= useState(props.amount);
   console.log('ExpenseItem evaluated by React')

    const clickHandler=()=>{
        setAmount('100'); 
       console.log(amount);
    };
    
    return (
        
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        
    );
}
export default ExpenseItem;