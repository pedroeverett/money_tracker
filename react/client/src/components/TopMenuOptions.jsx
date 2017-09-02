import React from 'react';

class TopMenuOptions extends React.Component {
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

  render() {
    return (
      <div id="TopMenuOptions">
      <a onClick={() => {this.hideFunction('news1')}}>Hide Tech</a>
      <a onClick={() => {this.hideFunction('news2')}}>Hide Entert</a>
      </div>
      );
  }


}

export default TopMenuOptions;