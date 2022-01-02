import React from 'react'
import Header from './Header.js';
import Form from './Form.js'
import Table from './Table.js'

export default function App(){

  const [formData, setFormData] = React.useState({
    payment: "",
    item: "",
    amount: "",
    location: "",
    date: "",
  })

  const [expense, setExpense] = React.useState([])

  function addExpense(event){
    event.preventDefault();

    const newExpense = { 
      id: Math.random(),
      payment: formData.payment,
      item: formData.item,
      amount: formData.amount,
      location: formData.location,
      date: formData.date
    }
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

  function saveExpnse(formData){
    localStorage.setItem("expnseArray", JSON.stringify({formData}) )
  }

  function getExpenseArray(){
    return JSON.parse(localStorage.getItem("expenseArray")) || [];
  }

  return (
    <div>
      <Header/>
      <Form data={formData} setFormData = {setFormData} addExpense={addExpense}/>
      <Table expense={expense} />
    </div>
  );
}