import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
