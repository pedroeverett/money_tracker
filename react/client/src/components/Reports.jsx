import React from 'react';
//import Highcharts from 'highcharts';

class Reports extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
    

render() {
  //console.log(this.state.totalCredit)
  return (
    <div>
    <div ref='chart'>
    </div>
    <div>
    <h1>hello</h1>
    <h1>Total Credit Expenses: £{this.props.tc}</h1>
    <h1>Total Debit Expenses: £{this.props.td}</h1>
    </div>
    </div>
    );
}

}
export default Reports;

