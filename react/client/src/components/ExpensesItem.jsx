import React from 'react';
//import ReactDOM from 'react-dom';

class ExpensesItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    // console.log(this.props.allItems)
    // return (
    //   <h1>Hello World</h1>
    //   )
   const eachNew = this.props.allItems.map((item, index) => {
     if (item.transaction_type == undefined)
       { return (       
        <tr key={index}>
        <td>{item.date}</td>
        <td>{item.name}</td>
        <td></td>
        <td>£{item.value}</td>
        <td>
        <a onClick={() => {this.props.delItem(item.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
        <a onClick={() => {this.editItemModal(item)}} className="myEditBtn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
        </td> 
        </tr>
        )} else 
     {

      return (       
       <tr key={index}>
       <td>{item.date}</td>
       <td>{item.name}</td>
       <td>{item.transaction_type.name}</td>
       <td>£{item.value}</td>
       <td>
       <a onClick={() => {this.deleteItem(item.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
       <a onClick={() => {this.editItemModal(item)}} className="myEditBtn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
       </td> 
       </tr>
       )}
    });

    return (
      <tbody>
      {eachNew}
      </tbody>
      )
    }
  }






export default ExpensesItem;