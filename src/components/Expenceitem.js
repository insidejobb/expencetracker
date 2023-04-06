import ExpenceDate from './ExpenceDate';
import './Expenceitem.css'
function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenceDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div>{props.location}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;