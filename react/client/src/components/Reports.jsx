// import React from 'react';
// import ExpensesList from './ExpensesList';

// class Reports extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       expenses: [],
//       totalCredit: [],
//       totalDebit: []
//     }
//   }

//   componetWillMount() {
//    this.ExpensList();
   
//  }
//  componentDidMount() {
//   this.TotalCredit()
// }


// ExpensList() {
//   var url = 'http://localhost:5000/api/expenses'
//   var request = new XMLHttpRequest()
//   request.open('GET', url)

//   request.setRequestHeader('Content-Type', "application/json")

//   request.onload = () => {
//    if(request.status === 200){
//     //console.log("request: ", request.responseText)
//     var data = JSON.parse(request.responseText)
//     this.setState( { expenses: data } )
//   } 
// }
// request.send(null)
// }

// TotalCredit() {
//   var sum = 500
//   var items = this.state.expenses.map((item, index) => {
//       // if(item.transaction_type.name === "Credit") {
//       //   sum = 20
//       // }
//       this.state.totalCredit.push(item.value)
//     })
//   console.log(this.state.expenses)
//   this.setState({totalCredit: sum})
// }


// render() {
//   console.log(this.state.totalCredit)
//   ExpensesList
//   return(

//     <h1>hello</h1>

//     );
// }

// }
// export default Reports;

