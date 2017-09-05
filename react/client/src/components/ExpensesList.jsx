import React from 'react';
import ReactDOM from 'react-dom';
import Repors from './Reports'

class ExpensesList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    expenses: [],
    date: [],
    name: [],
    price: [],
    expense_type: [],
    itemId: [],
    totalCredit: 0,
    totalDebit: 0
  };
}

componentDidMount() {
 this.ExpensList();
}

deleteItem(id) {
  console.log(id)
  var url = 'http://localhost:5000/api/expenses/' + id
  var request = new XMLHttpRequest()
  request.open('DELETE', url)
  request.setRequestHeader('Content-Type', "application/json")

  request.onload = () => {
    if(request.status === 200){
       // console.log("request: ", request.responseText)
       for(var i = 0; i < this.state.expenses.length; i++) {
        let item = this.state.expenses[i]
        if(item.id === id){
          this.state.expenses.splice(i, 1)
          this.setState({
            expenses: this.state.expenses
          })
          return
        }
      }
    } 
  }
  request.send()
}



//additem button = form = on submit calls additem()
addItem() {
  var url = 'http://localhost:5000/api/expenses'
  var request = new XMLHttpRequest()
  request.open('POST', url)

  request.setRequestHeader('Content-Type', "application/json")

  request.onload = () => {
   if(request.status === 200){
        //console.log(body)
        //console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        console.log(data)
        this.state.expenses.push(data)
        this.setState({
          expenses: this.state.expenses
        })
      } 
    }
    const body = {
      name: this.state.name,
      value:this.state.price,
      date: this.state.date,
      transaction_type: this.state.expense_type
    } 

    request.send(JSON.stringify(body))
  }

  editItem() {
    console.log("editItem() called")
    var url = 'http://localhost:5000/api/expenses/' + this.state.itemId
    var request = new XMLHttpRequest()
    request.open('PATCH', url)

    request.setRequestHeader('Content-Type', "application/json")

    request.onload = () => {
     if(request.status === 200){
          // console.log("request: ", request.responseText)
          var data = JSON.parse(request.responseText)
          console.log(data)
          this.state.expenses.push(data)
          this.setState({
            expenses: this.state.expenses
          })
        } 
      }
      const body = {
        name: this.state.name,
        value:this.state.price,
        date: this.state.date,
        transaction_type: this.state.expense_type
      } 

      request.send(JSON.stringify(body))
    }

    ExpensList() {
      var url = 'http://localhost:5000/api/expenses'
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")

      request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { expenses: data } )
        this.TotalCredit();
        this.TotalDebit();
      } 
    }
    request.send(null)
  }


  handleChangeDate(event) {
    this.setState({date: event.target.value})
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeValue(event) {
    this.setState({price: event.target.value})
  }
  handleChangeExpenseType(event) {
    this.setState({expense_type: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  editForm(item) {
  // this.hideFunction('editForm')
  this.setState({name: item.name})
  this.setState({price: item.value})
  this.setState({date: item.date})
  this.setState({itemId: item.id})
  this.setState({expense_type: item.transaction_type})
  console.log(this.state.itemId + " edit form called")
}
editFormExit() {
  this.setState({name: ""})
  this.setState({price: ""})
  this.setState({date: ""})
  this.setState({itemId: ""})
  this.setState({expense_type: ""})
  console.log(this.state.itemId)
}

addItemModal() {
  var modal = document.getElementById('myAddItemModal');
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

editItemModal(item){
 var modal = document.getElementById('myEditItemModal');
 var span = document.getElementsByClassName("xclose")[0];

 modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = "none";
    this.editFormExit();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  this.editForm(item);
}


TotalCredit() {
  var sum = 0
  var items = this.state.expenses.map((item, index) => {
      if(item.transaction_type.name === "credit") {
        sum += item.value
      }
    })
  console.log(this.state.expenses)
  this.setState({totalCredit: sum})
}

TotalDebit() {
  var sum = 0
  var items = this.state.expenses.map((item, index) => {
      if(item.transaction_type.name === "debit") {
        sum += item.value
      }
    })
  console.log(this.state.expenses)
  this.setState({totalDebit: sum})
}


render() {    
  const eachNew = this.state.expenses.map((item, index) => {
    if (item.transaction_type == undefined)
      { return (       
       <tr key={index}>
       <td>{item.date}</td>
       <td>{item.name}</td>
       <td></td>
       <td>£{item.value}</td>
       <td>
       <a onClick={() => {this.deleteItem(item.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
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

    <div className="expense-list-inner-div">

    <table>
    <tr className="table-row-header">
    <td>TRANSACTIONS</td>
    <td></td>
    <td></td>
    <td><a onClick={() => {this.addItemModal()}} id="myAddBtn"><i className="fa fa-plus-square" aria-hidden="true"> Add Transaction</i></a></td>
    </tr>
    <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Type</th>
    <th>Price</th>
    <th></th>
    </tr>
    { eachNew }
    </table>


    <div id="myEditItemModal" className="editmodal">
    <div className="editmodal-content">
    <div className="editmodal-header">
    <table id="form-table">
    <tr>
    <th></th>
    <th><h3>Edit Transaction</h3></th>
    <th><span className="xclose">&times;</span></th>
    <th></th>
    </tr>
    </table>
    </div>
    <div className="editmodal-body">
    <table id="form-table">
    <form id="editForm" onSubmit={this.editItem}>
    <tr><p>Date: <input type="date" name="date" value={this.state.date} onChange={this.handleChangeDate.bind(this)}/></p></tr>
    <tr><p>Description: <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/></p></tr>
    <tr><p>Price: <input type="integer" name="value" value={this.state.price} onChange={this.handleChangeValue.bind(this)}/></p></tr>
    <p><button onClick={() => {this.editItem()}} className="submit-button">Submit</button></p>
    </form>
    </table>
    </div>
    </div>
    </div>



    <div id="myAddItemModal" className="modal">
    <div className="modal-content">
    <div className="modal-header">
    <table id="form-table">
    <tr>
    <th></th>
    <th><h3>Add New Transaction</h3></th>
    <th><span className="close">&times;</span></th>
    <th></th>
    </tr>
    </table>
    </div>
    <div className="modal-body">
    <table id="form-table">
    <form id="addForm" onSubmit={this.addItem}>
    <tr><p>Type:  <input type="radio" name="type" value="debit" checked="checked" onChange={this.handleChangeExpenseType.bind(this)}/>  Debit 
    <input type="radio" name="type" value="credit" onChange={this.handleChangeExpenseType.bind(this)}/>  Credit </p></tr>
    <tr><p>Date: <input type="date" name="date"  onChange={this.handleChangeDate.bind(this)}/></p></tr>
    <tr><p>Description: <input type="text" name="name" onChange={this.handleChangeName.bind(this)}/></p></tr>
    <tr><p>Price: <input type="integer" name="value" onChange={this.handleChangeValue.bind(this)}/></p></tr>
    <p><button onClick={() => {this.addItem()}} className="submit-button">Submit</button></p>
    </form>
    </table>
    </div>
    </div>
    </div>

    <div>
    <h1>hello</h1>
    <h1>{this.state.totalCredit}</h1>
    <h1>{this.state.totalDebit}</h1>
    </div>

    </div>
    )
}
}
// onSubmit={this.handleChange}
// onChange={this.handleChange.bind(this)}
export default ExpensesList;