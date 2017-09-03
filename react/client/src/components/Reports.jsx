import React from 'react';
import ExpensesList from './ExpensesList';

class Reports extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: []
    }
  }

  render() {
    console.log(ExpensesList)
    return(

      <h1>hello</h1>

      );
  }

}
export default Reports;