import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

const App = () => {
  /*
  const expenses = [
    { title: "Car Insurance", amount: 294.45, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 12) },
    { title: "New Phone", amount: 90.5, date: new Date(2022, 2, 28) },
    { title: "A Desk (Wooden)", amount: 140.2, date: new Date(2021, 1, 16) },
  ];*/
  const [expenses, setExpenses] = useState([]);
  const [year, setYear] = useState(2022);

  const addExpense = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  const filteredExpenses = () => {
    return expenses.filter((e) => new Date(e.date).getFullYear() == year);
  };

  const dropDownChangeHandler = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="body">
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <ExpenseFilter
        onChangeFilter={dropDownChangeHandler}
        selected={year}
      ></ExpenseFilter>
      <Expenses expenses={filteredExpenses()}></Expenses>
    </div>
  );
};

export default App;

/*

*/
