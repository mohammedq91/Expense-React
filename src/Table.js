import React from 'react'

export default function Table(props){
  console.log(props.expense);
  // debugger;

  const expenseList = props.expense

  let expenseItem = expenseList.map(expense => {
    return (<tr key = {expense.id}>
              <td>{expense.payment}</td>
              <td>{expense.item}</td>
              <td>{expense.amount}</td>
              <td>{expense.location}</td>
              <td>{expense.date}</td>
              
              <td id="delete-btn-cell">
                <button id="delete-btn" onClick={deleteExpense}>Remove</button>
              </td>
            </tr>
            )
  })

  function deleteExpense(e){
    e.target.parentElement.parentElement.remove();
  }

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

// console.log(expenseItem)
  // let tableRowArray =[]

  // for (let i=0; i > tableRowArray.length; i++){

  //   td = props.data[i]
  //   // const newTableRow = (
  //   //   <tr>
  //   //     <td></td>
  //   //     <td></td>
  //   //     <td></td>
  //   //     <td></td>
  //   //   </tr>
  //   // );
  //   // tableRowArray.push(newRow[i])
    
  // }

  // const expenseElements = props.data;
 
  // const newTableRow = (
  //   <tr>
  //     <td>cash</td>
  //     <td>Kroger</td>
  //     <td>12/22/21</td>
  //     <td>240</td>
  //   </tr>
  // );

  // console.log(typeof newTableRow)

  // const secondTableRow = (
  //   <tr>
  //     <td>Credit</td>
  //     <td>McDonalds</td>
  //     <td>12/25/21</td>
  //     <td>100.00</td>
  //   </tr>
  // );

  // const rows = [newTableRow, secondTableRow]