import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InputForm({setExpenseList}){
  const [payment, setPayment] = useState('')
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState(0)
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  function addExpense(event){
    event.preventDefault();
    const newExpense = { 
      id: Math.random(),

      payment: payment,
      item: item,
      amount: amount,
      location: location,
      date: date
    };
    setExpenseList(prevExpense => [...prevExpense, newExpense])

    setPayment('');
    setAmount(0);
    setItem('');
    setDate('');
    setLocation('');
  }

  return (
    <Form onSubmit={addExpense} id="form-box"> 
      <Row>
        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="payments"> Type: </Form.Label>
          <select 
            id="form-payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
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
            value={item}
            placeholder="What did you spend on?"
            onChange={(e) => setItem(e.target.value)}
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
            value={amount}
            placeholder ='How much in $ 0.01 ?'
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className ="form-label" htmlFor ="location">Location: </Form.Label>
          <Form.Control 
            type = "text" 
            id = "form-location"
            value={location}
            placeholder ='Where was the item bought at?'
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label className="form-label" htmlFor ="date"> Date: </Form.Label>
          <Form.Control 
            type = "date" 
            id = "form-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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