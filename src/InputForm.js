import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InputForm(props){
 
  function handleChange(event){
    const {name, value} = event.target
    props.setFormData(prevFormData => ({
      ...prevFormData, 
      [name]: value
    }))
  }

  return (
    <Form onSubmit={props.addExpense} id="form-box"> 
      <Row>
        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="payments"> Type: </Form.Label>
          <select 
            id="form-payment"
            value={props.data.payment}
            onChange={handleChange}
            name="payment"
            required
          >
            <option className="option" value ="">-- Choose --</option>
            <option className="option" value ="cash">Cash</option>
            <option className="option" value ="credit">Credit</option>
            <option className="option" value ="debit">Debit</option>
            <option className="option" value ="crypto">Crypto</option>
            <option className="option" value ="other">Other</option>
          </select>
        </Form.Group>
      
        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="item-name">Item: </Form.Label>
          <Form.Control
            type = "text" 
            id="form-item"
            value={props.data.item}
            placeholder="What did you spend on?"
            onChange={handleChange}
            name="item"
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="amount">Amount: </Form.Label>
          <Form.Control 
            type = "number" step = "0.01"
            id="amount"
            value={props.data.amount}
            placeholder ='How much in $ 0.01 ?'
            onChange={handleChange}
            name="amount"
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className ="form-label" htmlFor ="location">Location: </Form.Label>
          <Form.Control 
            type = "text" 
            id = "form-location"
            value={props.data.location}
            placeholder ='Where was the item bought at?'
            onChange={handleChange}
            name="location"
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="date"> Date: </Form.Label>
          <Form.Control 
            type = "date" 
            id = "form-date"
            value={props.data.date}
            onChange={handleChange}
            name="date"
            required/>
        </Form.Group>
      </Row> 
  
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary" size="sm" >Add New Expense</Button>
      </div>
      
    </Form>
  )
}