import React from 'react';
import ReactDOM from 'react-dom';

import ExpensesList from './components/ExpensesList'
import Reports from './components/Reports'

import TopMenu from './components/TopMenu'

window.onload = function(){
  ReactDOM.render(
    <TopMenu />, 
    document.getElementById('header-menu')
    );
  

  ReactDOM.render(
    <ExpensesList name="Expenses List"/>,
    document.getElementById('expenses-list-html-container-div')
    );

    ReactDOM.render(
    <Reports name="Reports"/>,
    document.getElementById('reports-html-container-div')
  );
}

