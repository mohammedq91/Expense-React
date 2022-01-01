import React from 'react'
import Header from './Header.js';
import Form from './Form.js'
import Table from './Table.js'

export default function App(){

  const [formData, setFormData] = React.useState({
    payment: "",
    item: "",
    date: "",
    amount: ""
  })

  const [expense, setExpense] = React.useState([])

  // function saveExpnse(formData){
  //   localStorage.setItem("expnseArray", JSON.stringify({formData}) )
  // }

  // function getExpenseArray(){
  //   return JSON.parse(localStorage.getItem("expenseArray")) || [];
  // }

  function addExpense(event){
    event.preventDefault();

    const newExpense = { 
      id: Math.random(),
      payment: formData.payment,
      item: formData.item,
      date: formData.date,
      amount: formData.amount
    }
    setExpense(prevExpense => ([
      ...prevExpense, 
      newExpense
  
    ]))

    setFormData(formData)
    console.log(formData)
    // if (addExpense){
    //   setFormData(() => formData)
    // }
    // resetExpense();
  }

  // if(addExpense === true) {
  //   resetExpense();
  // }

  

  // console.log(saveExpnse())
  // localStorage.clear();


  // look up html form validation

  // re-set form after submission

  // add remove button along with each row

  // remove row from table 

  return (
    <div>
      <Header/>
      <Form data={formData} setFormData = {setFormData} addExpense={addExpense}/>
      <Table expense={expense} />
    </div>
  );
}