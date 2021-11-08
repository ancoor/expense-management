import React, {useState} from 'react'
import Card from './../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';

function Expenses({expenses}) {
    
    const [filteredYear, setFilteredYear] = useState('2020')
    let filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    const filterHandler = (year) => {
        setFilteredYear(year);
        console.log(filteredExpenses)
        
    }

    

    return (

            <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterHandler} selected={filteredYear} />
            <ExpensesList items={filteredExpenses} />
            </Card>

    )
}

export default Expenses
