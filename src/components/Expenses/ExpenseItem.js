import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import { useEffect, useState } from "react";
const ExpenseItem = (props) => {
  const { title, amount, date } = props.data;
  
  const [expenseTitle,setTitle] = useState(title);

  const buttonHandling = () => {
    setTitle("updated");
    console.log('Clicked',expenseTitle)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">₹ {amount}</div>
      </div>
      <button onClick={buttonHandling}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
