
import ExpenseDate from './expenseDate';
import Card from '../UI/Card';
import './expenseitem.css';

const ExpenseItem=(props)=> {
    const clickFun=()=>{
        console.log('Deleted');
    }
    
    return (
        
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickFun}>Delete Expence</button>
            </Card>
        
    );
}
export default ExpenseItem;