import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Dillon',   lastName: 'Rodriguez'},
      company: 'looking to learn'
    };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi my name is {this.state.name.firstName} {this.state.name.lastName}, and I'm {this.state.company}
          </p> 
          <button onClick={() => {
            this.setState((state, props) =>{
              return{
                name: {firstName: 'Cesar', lastName: 'Rdz'},
              }
            }, () => {
              console.log(this.state);
            }
            );
            // console.log(this.state);

          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
