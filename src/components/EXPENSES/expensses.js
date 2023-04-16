import React, {useState} from  "react";
import ExpenseItem from "./expenseitem";
import Card from '../UI/Card';
import ExpensesFilter from './expensFilter';
import './expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear}
         onChangeFilter={filterChangeHandler} 
         />
        {props.items.map(expense=>(
        <ExpenseItem title={expense.title}
         amount={expense.amount}
          date={expense.date}
        />))}
      </Card>
    </div>
  );
};

export default Expenses;