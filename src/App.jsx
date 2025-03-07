import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  /*
  const expenses = [
    { title: "Car Insurance", amount: 294.45, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 12) },
    { title: "New Phone", amount: 90.5, date: new Date(2022, 2, 28) },
    { title: "A Desk (Wooden)", amount: 140.2, date: new Date(2021, 1, 16) },
  ];*/
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevState) => {
      console.log([...prevState, { ...expense, date: new Date(expense.date) }]);
      return [...prevState, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;

/*

*/
