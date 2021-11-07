import React from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from './../UI/Card'
import './Expenses.css'

function Expenses({expenses}) {
    return (
        <Card className="expenses">
            {
                expenses.map(expense => {
                return <ExpenseItem key={expense.id} data={expense} />
                })
            }
        </Card>
    )
}

export default Expenses
