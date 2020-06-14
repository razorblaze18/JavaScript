import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;


// &:hover {
//   background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//   color: black;
// }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'qwer', name: 'Max', age: 28 },
      { id: 'tvyb', name: 'Manu', age: 29 },
      { id: 'cvbn', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });//findIndex takes a function as an input just like .map
 
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();//Fetching the persons data. We have used slice here to make a copy of each element
    const persons = [...this.state.persons]//Using the SPREAD Operator.
    persons.splice(personIndex, 1);//Splice: it removes one element from the array
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}//We have used arrow function here, the alternative would be ".bind(this, index);"
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>//to render something in our JSX code. ".map()" function is used to convert into arrays.
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',//light red dosen't exist.
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');// classes = ['red'];
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');// classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

//this.switchNameHandler.bind() is much more efficient than using arrow function in line 32.
