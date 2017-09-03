import React from 'react';
import ReactDOM from 'react-dom';

// class ExpensesItem extendes React.Component {
//   class ExpensesList extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//       expenses: props.expenses
//     };
//   }

const ExpensesItem = (props) => (
  const eachNew = this.state.expenses.map((item, index) => {
  <tr key={index}>
  <td>{item.date}</td>
  <td>{item.name}</td>
  <td>£{item.value}</td>
  <td>
  <a  onClick={() => {this.deleteItem(item.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
  <a onClick={() => {this.editForm(item)}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
  </td> 
  </tr>
  )




export default ExpensesItem;