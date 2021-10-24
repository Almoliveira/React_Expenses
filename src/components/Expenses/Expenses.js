import React, { useState } from 'react';


import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2021')
  const filterChangedHandler = year =>{
      console.log(year);
      setSelectedYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChanged={filterChangedHandler} defaultYear={selectedYear}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
