import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleDateString("en-US", { month: "long" });
  const day = newDate.toLocaleDateString("en-US", { day: "2-digit" });
  const year = newDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
