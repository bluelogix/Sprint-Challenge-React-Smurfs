import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

componentDidMount() {
  console.log('CDM');
    axios.get('http://localhost:3333/smurfs')
     .then(res => {
        this.setState({ smurfs: res.data })
     })
      .catch(err => console.log(err))

    
}

addSmurf = data => {
  this.setState({ smurfs: data })
}





  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

      <NavLink to='/' activeStyle={{
        textDecoration: 'none',
        fontSize: '55px',
        color: 'white'
      }}
      > Smurfs 
      </NavLink>

      <NavLink to='/smurf-form'
      activeClassName="form"
        formStyle={{
        textDecoration: 'none',
        fontSize: '55px',
        color: 'white'
      }}> 
            Add a smurf
      </NavLink>
      
        <Route path='/smurf-form' render ={props => <SmurfForm {...props}
        addSmurf={this.addSmurf} /> } />

        <Route exact path='/' render={props => <Smurfs 
        {...props}
        smurfs={this.state.smurfs} /> } />

      </div> // end div
    );
  }
}

export default App;
