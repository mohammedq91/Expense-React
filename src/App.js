import React, {useEffect} from 'react'
import Form from './InputForm.js'
import Table from './tableExpense'

export default function App(){

  debugger

  const [formData, setFormData] = React.useState({
    // number: "",
    payment: "",
    item: "",
    amount: "",
    location: "",
    date: "",
  })

  const [expense, setExpense] = React.useState([])

  useEffect(() => {
    if (localStorage.getItem("expenseArray")){
      setExpense(JSON.parse(localStorage.getItem("expenseArray")) ) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("expenseArray", JSON.stringify(expense))
  }, [expense])

  function addExpense(event){
    event.preventDefault();

    let expenseNumber = 0;

    const newExpense = { 
      id: Math.random(),
      number: expenseNumber += 1,
      payment: formData.payment,
      item: formData.item,
      amount: formData.amount,
      location: formData.location,
      date: formData.date
    };
    setExpense(prevExpense => ([
      ...prevExpense, 
      newExpense
    ]))

    setFormData({
      payment: "",
      item: "",
      amount: "",
      date: "",
      location: ""
    })
  }

  function deleteExpense(expenseToBeDeleted){
    // debugger
    const removeExpense = expense.filter(expenseItem => expenseItem.id !== expenseToBeDeleted.id)
    setExpense(removeExpense)
  }
  return (
    <div>
      <h1 className="header">Simple Expense Manager Project</h1>
      <h4>Add A New Item</h4>
      <Form data={formData} setFormData = {setFormData} addExpense={addExpense}/>
      <Table expense={expense} deleteExpense={deleteExpense}/>
    </div>
  );
}