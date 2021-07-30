import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(0);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        displayContentHandler();
    }
    const displayContentHandler = () => {
        setDisplayForm((prevState) => !prevState)
    }
    let defaultContent = <button onClick={displayContentHandler}>Add New Expenses</button>
    if (displayForm) {
        defaultContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    }
    return (
        <div className='new-expense'>
            {defaultContent}
        </div>
    )
}

export default NewExpense;