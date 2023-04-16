import React, {useState} from  "react";
import NewExpense from './components/NewExpense/newExpense';
import Expenses from './components/expenses/expensses';


    const Dummy_EXPENSES = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) 
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 6, 12),
        },
    ];
    const App=()=>{
        
    const [expenses,setExpenses]= useState(Dummy_EXPENSES);

    const addExpenseHandler=expense=>{
       setExpenses(prevExpenses=>{
        return([expense,...prevExpenses])
       })
    };
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2',{},"Lets get started"),
    //     React.createElement(Expenses,{items: expenses})
    // );

    return (
        <div>
           < NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );

}
export default App;