import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense({onAddExpense}) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),

        }
        onAddExpense(expenseData)
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
