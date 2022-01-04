import React, {useEffect} from 'react'
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

  
  useEffect(() => {
    if (localStorage.getItem("expenseArray")){
      setExpense(JSON.parse(localStorage.getItem("expenseArray")) ) 
    }
  }, [])

  useEffect(() => {
      localStorage.setItem("expnseArray", JSON.stringify(expense))
      
      // let getExpense = JSON.parse(localStorage.getItem("expenseArray")) || [];
    }, [expense])


    // console.log(getExpense)

  function addExpense(event){
    event.preventDefault();

    const newExpense = { 
      id: Math.random(),
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
    // localStorage.clear();

    // function saveExpnse(expense){
    //   localStorage.setItem("expnseArray", JSON.stringify(expense))
    // }

  // function getExpenseArray(){
  //   return JSON.parse(localStorage.getItem("expenseArray")) || [];
  // }

  // let x = getExpenseArray();
  // console.log(x)

  return (
    <div>
      <Header/>
      <Form data={formData} setFormData = {setFormData} addExpense={addExpense}/>
      <Table expense={expense} />
    </div>
  );
}