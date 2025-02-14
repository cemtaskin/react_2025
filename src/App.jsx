import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.45, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 12) },
    { title: "New Phone", amount: 90.5, date: new Date(2022, 2, 28) },
    { title: "A Desk (Wooden)", amount: 140.2, date: new Date(2021, 1, 16) },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
