import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function InputForm(props){
 
  function handleChange(event){
    const {name, value} = event.target
    props.setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: value
    }))
  }

  return (
    <div>
        <Form onSubmit={props.addExpense} id="form-box"> 

        <Form.group>
          <Form.label className="form-label" htmlFor ="payments"> Type: </Form.label>
          <select 
            id="form-payment"
            value={props.data.payment}
            onChange={handleChange}
            name="payment"
            required>


            <option className="option" value ="">-- Choose --</option>
            <option className="option" value ="cash">Cash</option>
            <option className="option" value ="credit">Credit</option>
            <option className="option" value ="debit">Debit</option>
            <option className="option" value ="crypto">Crypto</option>
            <option className="option" value ="other">Other</option>
          </select>
        </Form.group>

        <div>
          <label className="form-label" htmlFor ="payments"> Type: </label>
          <select 
            id="form-payment"
            value={props.data.payment}
            onChange={handleChange}
            name="payment"
            required>


            <option className="option" value ="">-- Choose --</option>
            <option className="option" value ="cash">Cash</option>
            <option className="option" value ="credit">Credit</option>
            <option className="option" value ="debit">Debit</option>
            <option className="option" value ="crypto">Crypto</option>
            <option className="option" value ="other">Other</option>
          </select>
        </div>

        <div>
          <label className="form-label" htmlFor ="item-name">Item: </label>
          <input 
            type = "text" 
            id="form-item"
            value={props.data.item}
            placeholder="What did you spend on?"
            onChange={handleChange}
            name="item"
            required/>
        </div>

        <div>
          <label className="form-label" htmlFor ="amount">Amount: </label>
          <input 
            type = "number" step = "0.01"
            id="amount"
            value={props.data.amount}
            placeholder ='How much in $ 0.01 ?'
            onChange={handleChange}
            name="amount"
            required/>
        </div>

        <div>
          <label className ="form-label" htmlFor ="location">Location: </label>
          <input 
            type = "text" 
            id = "form-location"
            value={props.data.location}
            placeholder ='Where was the item bought at?'
            onChange={handleChange}
            name="location"
            required/>


        </div>

        <div>
          <label className="form-label" htmlFor ="date"> Date: </label>
          <input 
            type = "date" 
            id = "form-date"
            value={props.data.date}
            onChange={handleChange}
            name="date"
            required/>
        </div>

        {/* <button id="button">Add a new expense</button> */}
        <Button type="submit" size="sm" active variant = "primary">Add New Expense</Button>
        
       

      </Form>
    </div>
    
  )
}