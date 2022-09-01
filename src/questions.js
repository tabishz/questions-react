import React, { Component } from 'react';

class Questions extends Component {
  render() {
    return (
      <div className='questionsMain'>
        <form onSubmit={this.props.addQuestion}>
          <input placeholder='Question' />
          <buttom type='submit'>Ask</buttom>
        </form>
      </div>
    )
  }
}

export default Questions;