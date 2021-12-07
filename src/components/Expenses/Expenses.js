import React, { useState } from "react";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const filterHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredExpenses);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
