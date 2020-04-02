import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guestname: '',
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { guestname, date, time, guests } = this.state
    this.props.submitNewRes({
      guestname,
      date,
      time,
      guests
    });
    this.setState({
      guestname: '',
      date: '',
      time: '',
      guests: ''
    })
  }

  render() {
    const { guestname, date, time, guests } = this.state
    return (
      <div className="form-container">
        <form
          className="new-res-form"
          onSubmit={this.handleSubmit}
        >
            <input 
            type="text"
            name="guestname"
            placeholder="Name"
            onChange={this.handleInput}
            required
            value={guestname}
          />
          <input 
            type="text"
            name="date"
            placeholder="Date (mm/dd)"
            onChange={this.handleInput}
            required
            value={date}
          />
          <input 
            type="text"
            name="time"
            placeholder="Time"
            onChange={this.handleInput}
            required
            value={time}
          />
          <input 
            type="text"
            name="guests"
            placeholder="Number of guests"
            onChange={this.handleInput}
            required
            value={guests}
          />
          <button
            type="submit"
            className="buttons submit-res"
            onClick={() => console.log('reser')}>
            Make Reservation
          </button> 
        </form>
      </div>
    )
  }
}

export default Form;
