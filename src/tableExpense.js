import React from 'react'
import Table from 'react-bootstrap/Table'
import ExpenseRow from './ExpenseRow'
import ExpenseTotal from './ExpenseTotal'
// import ToggleButton from 'react-bootstrap/ToggleButton'

export default function TableExpense({expenseList, deleteExpense}){
  return(
    <Table striped bordered hover size="sm">
      <caption></caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Item</th>
          <th>Amount</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <ExpenseRow 
          expenseList={expenseList} 
          deleteExpense={deleteExpense}
        />
      </tbody>
      <tfoot>
        <ExpenseTotal 
          expenseList={expenseList}
        />
      </tfoot>
    </Table>
  )
}