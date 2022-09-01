import React, { Component } from 'react';
import './App.css';
import Questions from './questions';

class App extends Component {
  constructor () {
    super();
    this.state = {
      questions: []
    };
  }

  addQuestion = () => {
    console.log('Q add');
  }

  render() {
    return(
      <div className='App'>
        <Questions />
      </div>
    )
  }
}

export default App;
