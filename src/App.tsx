import "./components/ListGroup/ListGroup";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  console.log(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(2);

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  //   { id: 5, description: "eee", amount: 10, category: "Utilities" },
  // ]);
  // console.log(expenses);

  // if (expenses.length === 0) return null;

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;

  return (
    <div>
      {/* <ExpenseForm />

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      /> */}

      {/* <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}
    </div>
  );
}

export default App;
