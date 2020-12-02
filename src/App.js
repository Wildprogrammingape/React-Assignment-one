import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {

  state = {
    username : [
      {name : 'Long Chen'}
    ]
  }

  switchStateHandler = (event) =>{ // 将 state的username中name部分， set 成文本框输入的内容 (通过event关键词)
    this.setState({username : [
      {name : event.target.value}
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        
        <UserOutput name={this.state.username[0].name}/>
        <UserInput changed={this.switchStateHandler} currentValue={this.state.username[0].name}/>
      </div>
    );
  }
}

export default App;


// Create TWO new components: UserInput and UserOutput
// UserInput should hold an input element, UserOutput two paragraphs
// Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// Pass a username (of your choice) to UserOutput via props and display it there
// Add state to the App component (=> the username) and pass the username to the UserOutput component

// Add a method to manipulate the state (=> an event-handler method)
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// Add two-way-binding to your input (in UserInput) to also display the starting username
// Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
