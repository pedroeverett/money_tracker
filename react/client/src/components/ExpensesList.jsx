import React from 'react';
import ReactDOM from 'react-dom';

class ExpensesList extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      expenses: [],
      date: [],
      name: [],
      price: [],
      itemId: []
    };
  }

  componentDidMount() {
   this.ExpensList();
  }

  deleteItem(id) {
    // console.log(id)
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
        date: this.state.date
    } 

    request.send(JSON.stringify(body))
  }

  editItem() {
    console.log("hekkkk")
      var url = 'http://localhost:5000/api/expenses/55'
      var request = new XMLHttpRequest()
      request.open('PUT', url, false)

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
          name: "eeeeerrr",
          value:this.state.price,
          date: "2012-12-20"
      } 

      request.send(JSON.stringify(body))
    }

  //   var url = 'http://localhost:5000/api/expenses/' + this.state.itemId
  //   var request = new XMLHttpRequest()
  //   request.open('PUT', url)

  //   request.setRequestHeader('Contente-Type', "application/json")

  //   request.onload = () => {
  //     if(request.status === 200) {
  //       var data = JSON.parse(request.responseText)
  //       this.state.expenses.push(data)
  //       this.setState({
  //         expenses: this.state.expenses
  //       })
  //     }
  //   }
  //   const body = {
  //     name: this.state.name,
  //     value: this.state.price
  //   }

  //   request.send(JSON.stringify(body))
  // }

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
       } 
    }
    request.send(null)
  }
//editForm() //just creates a form and gets the values of the item that is passed when created.
//this form will have a submit button that when clicked class the editItem()
//the editItem() body will get the elements from the form, and will be almost like the addItem() onerror

hideFunction(section) {
    let x = document.getElementById(section);
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

handleChangeName(event) {
  this.setState({name: event.target.value})
}

handleChangeValue(event) {
  this.setState({price: event.target.value})
}

editForm(item) {
  this.hideFunction('editForm')
  this.setState({name: item.name})
  this.setState({price: item.value})
  this.setState({date: item.date})
  this.setState({itemId: item.id})
  console.log(this.state.itemId)
}



  render() {
    // console.log('http://localhost:5000/api/expenses')
    // console.log(this.state.expenses);
    const eachNew = this.state.expenses.map((item, index) => {
     return (       
        <tr key={index}>
        <td>{item.date}</td>
        <td>{item.name}</td>
        <td>{item.value}</td>
        <td>
        <a  onClick={() => {this.deleteItem(item.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
        <a onClick={() => {this.editForm(item)}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
        </td> 
        </tr>
      )
   });

    return (
      <div className="container">
      <h1>{this.props.name}</h1>
      <table>
      <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Price</th>
      <th></th>
      </tr>
     { eachNew }
        <tr>
        <form id="editForm" onSubmit={this.editItem}>
        <td><input type="tex" name="date" value={this.state.date} onChange={this.handleChangeValue.bind(this)}/></td>
        <td><input type="text" name="name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/></td>
        <td><input type="integer" name="value" value={this.state.price} onChange={this.handleChangeValue.bind(this)}/></td>
        <td><button onClick={() => {this.editItem()}}>Submit</button></td>
        </form>
        </tr>
      </table>
      <button onClick={() => {this.hideFunction('addForm')}}>Add Item</button>
        <form id="addForm" >
      Date: <input type="text" name="date" value={this.state.date} onChange={this.handleChangeValue.bind(this)}/>
      Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
      Price: <input type="integer" name="value" value={this.state.price} onChange={this.handleChangeValue.bind(this)}/>
      <button onClick={() => {this.addItem()}}>Submit</button>
      </form>

      </div>
      )
  }
}
// onSubmit={this.handleChange}
// onChange={this.handleChange.bind(this)}
export default ExpensesList;