import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Aman', age: 22 },
      { name: 'Mudit', age: 21 },
      { name: 'Chundi', age: 17 }
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Aman Dhangar';
    this.setState(
      {
        persons: [
          { name: 'Aman Dhangar', age: 22 },
          { name: 'Mudit', age: 21 },
          { name: 'Ojaswita', age: 17 }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));//Create ELement takes minimun 3 arguements and maximum infinite arguements.
  }
}

export default App;
