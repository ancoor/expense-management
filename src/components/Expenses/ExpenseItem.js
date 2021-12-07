import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
const ExpenseItem = (props) => {
  const { title, amount, date } = props.data;
  

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={new Date(parseInt(date))} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">₹ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
