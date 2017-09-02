import React from 'react';
import TopMenuOptions from './TopMenuOptions';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  hideFunction(section) {
      let x = document.getElementById(section);
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }

  // render() {
  //   return (
  //     <div>
  //     <button onClick={() => {this.hideFunction('news1')}}>Hide Tech</button>
  //     <button onClick={() => {this.hideFunction('news2')}}>Hide Entert</button>
  //     </div>
  //     );
  // }

  render() {
    return(
      <div id="TopMenu">
      <a href="#news1">Expenses</a>
      <a href="#news2">Graphs</a>
      <a onClick={() => {this.hideFunction('TopMenuOptions')}}>Setup</a>
      <TopMenuOptions />
      </div>
      );
  }

}
export default TopMenu;