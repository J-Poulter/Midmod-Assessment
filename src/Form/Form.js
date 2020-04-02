import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="form-container">
        <input 
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={this.handleInput}
          required
          value={name}
        />
        <input 
          type="text"
          id="date"
          name="date"
          placeholder="Date (mm/dd)"
          onChange={this.handleInput}
          required
          value={date}
        />
        <input 
          type="text"
          id="time"
          name="time"
          placeholder="Time"
          onChange={this.handleInput}
          required
          value={time}
        />
        <input 
          type="text"
          id="guests"
          name="guests"
          placeholder="Number of guests"
          onChange={this.handleInput}
          required
          value={guests}
        />
        <button
          type="submit"
          className="buttons"
          onClick={() => console.log('reser')}>
          Make Reservation
        </button>
      </div>
    )
  }
}

export default Form;
