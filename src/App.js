import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

function App() {

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get Started"),
  //   React.createElement(Expenses, {expenses: expenses} )
  // );

  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses'))??[]);
  const addExpenseHandler = expense => {
    const newExpenses = expenses;
    setExpenses((prevExpenses) => [
      expense,
      ...prevExpenses,
    ])
    newExpenses.push(expense);
    console.log(expenses)
    localStorage.setItem("expenses",JSON.stringify(newExpenses))
  }
  console.log(expenses)
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
