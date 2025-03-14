const ExpenseFilter = ({ selected, onChangeFilter }) => {
  return (
    <select onChange={onChangeFilter} value={selected}>
      <option value="2022">Year 2022 </option>
      <option value="2023">Year 2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
    </select>
  );
};

export default ExpenseFilter;
