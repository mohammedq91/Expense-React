import React from 'react'

export default function Table(props){

  const expenseList = props.expense

  let expenseItem = expenseList.map(expense => {
    return (<tr key = {expense.id}>
              <td>{expense.payment}</td>
              <td>{expense.item}</td>
              <td>{expense.amount}</td>
              <td>{expense.location}</td>
              <td>{expense.date}</td>
              
              <td id="delete-btn-cell">
                <button id="delete-btn" onClick={() => props.deleteExpense(expense)}>Remove</button>
              </td>
            </tr>
            )
  })
  return(
    <div className="table">

      <table>
        <caption></caption>

        <thead>
          <tr>
            <th>type</th>
            <th>name</th>
            <th>date</th>
            <th>amount</th>
          </tr>
        </thead>

        <tbody>
          {expenseItem}
        </tbody>

        <tfoot>
          <tr>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}