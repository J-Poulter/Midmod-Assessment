import React from 'react';
import './ReservationContainer.css';
import Reservations from '../Reservations/Reservations';

const ReservationContainer = (props) => {
  const renderedReservations = props.reservations.map(reservation => (
    <Reservations
      reservation={reservation}
      key={reservation.id}
    />
  ))
  return (
    <div>
      {renderedReservations}
    </div>
  )
}

export default ReservationContainer;
