import React, {useEffect, useState} from 'react'
import InputForm from './InputForm.js'
import TableExpense  from './TableExpense'

export default function App(){
  const [expenseList, setExpenseList] = useState([])

  useEffect(() => {
    if (localStorage.getItem("expenseArray")){
      setExpenseList(JSON.parse(localStorage.getItem("expenseArray")) ) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("expenseArray", JSON.stringify(expenseList))
  }, [expenseList])

  function deleteExpense(expenseToBeDeleted){
    // debugger
    const removeExpense = expenseList.filter(expenseItem => expenseItem.id !== expenseToBeDeleted.id)
    setExpenseList(removeExpense)
  }
  return (
    <div>
      <h1 className="header">Simple Expense Manager Project</h1>
      <h4>Add A New Item</h4>
      <InputForm
        setExpenseList={setExpenseList}
       />
      <TableExpense  
        expenseList={expenseList} 
        setExpenseList={setExpenseList}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}