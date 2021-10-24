import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesLIst";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filterChangedHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
     
      <Card className="expenses">
        <ExpensesFilter
          onFilterChanged={filterChangedHandler}
          defaultYear={selectedYear}
        />
         <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
