import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import ReservationContainer from '../ReservationContainer/ReservationContainer';

class App extends Component {
 constructor() {
   super();
   this.state = {
     reservations: []
  }
 }

 componentDidMount() {
   fetch('http://localhost:3001/api/v1/reservations')
   .then(res => res.json())
   .then(data => this.setState({reservations: data}))
   .catch(err => console.error(err))
 }

 submitNewRes() {
   
 }
  
  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form submitNewRes={this.submitNewRes}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
