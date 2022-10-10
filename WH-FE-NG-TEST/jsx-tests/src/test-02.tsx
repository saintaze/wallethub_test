/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const styles = {
	button: {
		backgroundColor: 'gold',
		border: '1px solid goldenrod',
		padding: '5px 12px',
		borderRadius: '3px',
		color: '#222'
	},
	count: {
		color: 'firebrick'
	}
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

	state = {
		counter: 0
	}

	incrementCouter = () => this.setState(oldState => ({ counter: oldState.counter + 1 }))

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span style={styles.count}>{this.state.counter}</span></p>
        <button style={styles.button} id="mainButton" onClick={this.incrementCouter}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);