import "./ExpenseItem.css";

function ExpenseItem({ date, amount, title }) {
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <div>{title}</div>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
