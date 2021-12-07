import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /* Current Date Start */
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  /* Current Date End */

  // const [title, setTitle ] = useState('');
  // const [amount, setAmount ] = useState('');
  // const [date, setDate ] = useState(today);

  // const inputHandler = (event) => {
  //     if(event.target.name === 'title')
  //     {
  //         setTitle(event.target.value);
  //     }
  //     else if (event.target.name === 'amount')
  //     {
  //         setAmount(event.target.value);
  //     }
  //     else
  //     {
  //         setDate(event.target.value);
  //     }
  // }
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: today,
  });
  const { title, amount, date } = expense;
  const inputHandler = (event) => {
    setExpense((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (title === "" || amount === "" || date === "") {
      alert("Fields are Required");
    } else {
      const expenseData = {
        title: title,
        amount: +amount,
        date: new Date(date),
      };
      setExpense({
        title: "",
        amount: "",
        date: today,
      });
      props.onSaveExpenseData(expenseData);
    }
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={inputHandler}
            value={title}
            placeholder="Enter Title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            name="amount"
            onChange={inputHandler}
            value={amount}
            placeholder="Enter Amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={today}
            name="date"
            onChange={inputHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.openForm}>Cancel</button>{" "}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
