import React from 'react';
import ReactDOM from 'react-dom';

import ExpensesList from './components/ExpensesList'

import TechCrunchList from './components/TechCrunchList'
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
}

