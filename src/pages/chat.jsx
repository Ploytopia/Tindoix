import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const liff = window.liff;  

class App extends Component {

  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.initialize);
  }

  initialize() {
    liff.init((data) => {});
  }
}