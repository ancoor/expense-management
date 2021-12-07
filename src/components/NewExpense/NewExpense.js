import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense({onAddExpense}) {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),

        }
        onAddExpense(expenseData)
        setIsEditing((prevPops) => !prevPops)
    }
    const editHandler = () => {
        setIsEditing((prevPops) => !prevPops)
    }
    return (
        <div className="new-expense">
            {
                isEditing ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} openForm={editHandler} />
                :
                <button onClick={editHandler}>Add New Expense</button>
            }

        </div>
    )
}

export default NewExpense
