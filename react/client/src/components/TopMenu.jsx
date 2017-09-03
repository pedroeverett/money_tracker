import React from 'react';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }


  hideFunction(section) {
    let x = document.getElementById(section);
    if (x.style.display == 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  render() {
    return(
      <div id="TopMenu">
      <a onClick={() => {this.hideFunction('expenses-list-html-container-div')}}>Expenses</a>
      <a onClick={() => {this.hideFunction('reports-html-container-div')}}>Reports</a>
      </div>
      );
  }

  // <a href="">Expenses</a>
  // <a href="">Reports</a>

}
export default TopMenu;