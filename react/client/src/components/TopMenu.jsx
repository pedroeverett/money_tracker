import React from 'react';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div id="TopMenu">
      <a href="">Expenses</a>
      <a href="">Graphs</a>
      </div>
      );
  }

}
export default TopMenu;