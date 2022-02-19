import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
// import ToggleButton from 'react-bootstrap/ToggleButton'

export default function tableExpense(props){

  const expenseList = props.expense

  let expenseRowNumber = 0;

  let expenseItem = expenseList.map(expense => {
    expenseRowNumber += 1;
    return (<tr key = {expense.id}>
              <td>{expenseRowNumber}</td>
              <td>{expense.payment}</td>
              <td>{expense.item}</td>
              <td>{expense.amount}</td>
              <td>{expense.location}</td>
              <td>{expense.date}</td>
              
              <td id="delete-btn-cell">
                {/* <button id="delete-btn" onClick={() => props.deleteExpense(expense)}>Remove</button> */}
                <Button id="delete-btn" onClick={() => props.deleteExpense(expense)}>Remove</Button>

              </td>
            </tr>
            )
  })
  return(
      <Table striped bordered hover size="sm">
        <caption></caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseItem}
          {/* <h1> <Badge bg ="secondary">New</Badge> </h1> */}
        </tbody>
        <tfoot>
          <tr>
          </tr>
        </tfoot>
      </Table>
  )
}