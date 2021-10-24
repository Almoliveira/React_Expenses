import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (prop) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    prop.onAddExpenseHandler(expenseData);
    //console.log(expenseData);
    
  };

  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
