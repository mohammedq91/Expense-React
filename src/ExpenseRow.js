import React from 'react';
import Button from 'react-bootstrap/Button'

function ExpenseRow({expenseList, deleteExpense}){
  let expenseRowNumber = 0;
  // debugger
  return expenseList.map((expense) => (
    // expenseRowNumber += 1
    <tr key={expense.id}>
      
        <td>{expenseRowNumber}</td>
        <td>{expense.payment}</td>
        <td>{expense.item}</td>
        <td>{expense.amount}</td>
        <td>{expense.location}</td>
        <td>{expense.date}</td>
        <td id="delete-btn-cell">
          <Button id="delete-btn" onClick={() => 
            deleteExpense(expense)}>Remove
          </Button>
        </td>
    </tr>
  ));

}

export default ExpenseRow;
