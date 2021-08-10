import "./ExpenseItemList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemList(props) {
  const expenses = props.expenses;
  const listItems = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <div class="expenses">{listItems}</div>;
}

export default ExpenseItemList;
