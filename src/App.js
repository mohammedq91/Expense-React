// import logo from './logo.svg';
// import './App.css';

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
    amount: ""
    // expense: []
  })

  // const [expense, setExpense] = React.useState({

  // })


  

  return (
    <div>
      <Header/>
      <Main data={formData} setFormData = {setFormData}/>
      <Table data={formData} setFormData = {setFormData}/>
    </div>
  );
}

// ReactDOM.render(<App/>, document.getElementById('root'));