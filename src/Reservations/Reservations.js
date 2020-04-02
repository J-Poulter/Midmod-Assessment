import React from 'react';
import './Reservations.css';

const Reservations = ({reservation}) => {
  const { name, date, time, number } = reservation
  return (
    <div className="reservation-card">
      <h1 className="res-title">{name}</h1>
      <p className="res-text">Date: {date}</p>
      <p className="res-text">{time} pm</p>
      <p className="res-text">Number of guests: {number}</p>
      <button 
        type="button" 
        onClick={() => console.log('erased')} 
        className="cancel-button buttons">
          Cancel
      </button>
    </div>
  )
}

export default Reservations;
