import React from 'react';

function ExpenseTotal({expenseList}){
  let total=0;
  if (expenseList) {
    expenseList.map((item) => {
      return (total += parseInt(item.amout))
    });
  }
  return (
    <>
      <tr>
        <td> Total ${total}</td>
      </tr>
    </>
  );
} 

export default ExpenseTotal;