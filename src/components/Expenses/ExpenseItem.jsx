import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, amount, title }) => {
  const [newAmount, setNewAmount] = useState(amount);

  const up = () => {
    setNewAmount(newAmount + 10);
  };

  const down = () => {
    setNewAmount(newAmount - 10);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">${newAmount.toFixed(2)}</div>
      </div>
      <div>
        <button onClick={up}>+10</button>
        {newAmount}
        <button onClick={down}>-10</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
