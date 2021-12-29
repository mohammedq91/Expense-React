import React from 'react'
import Header from './Header.js';
import Main from './Main.js'
import Table from './Table.js'

export default function App(){

  const [formData, setFormData] = React.useState({
    id: 1,
    payment: "",
    item: "",
    date: "",
    amount: "",
    expense: []
  })

  // const [expense, setExpense] = React.useState({
  // })

  // 1. save expense in local storage
  // 2. get expense from local storage
  // 3. push saved expense into formData Object to add expense into table

  function saveExpnse(formData){
    localStorage.setItem("expnseArray", JSON.stringify({formData}) )
  }

  function getExpenseArray(){
    return JSON.parse(localStorage.getItem("expenseArray")) || [];
  }

  function addExpense(formData){
    let expenseArray = getExpenseArray();
    expenseArray.push(formData)
    saveExpnse(expenseArray)
  }

  
  // console.log(saveExpnse())
  // localStorage.clear();

  return (
    <div>
      <Header/>
      <Main data={formData} setFormData = {setFormData} addExpense={addExpense}/>
      <Table expense={formData.expense} />
    </div>
  );
}