import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onAddExpense }) => {
  //const [title, setTitle] = useState("");
  //const [amount, setAmount] = useState(0.0);
  //const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0.0,
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    }); //updates userInput state and changes title
    //setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
    //setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });

    //setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //const expenseData = {
    //  title: title,
    //  amount: amount,
    //  date: new Date(date),
    //};

    //console.log(userInput);
    onAddExpense(userInput);

    setUserInput({
      title: "",
      amount: 0.0,
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-01-01"
            max="2040-01-01"
            onChange={dateChangeHandler}
            value={userInput.date}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
