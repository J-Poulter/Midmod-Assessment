import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservations from './Reservations';

describe('Reservations', () => {
  const mockReservation = {
    id: 7,
    name: 'Christie',
    date: '8/8',
    time: '5:00',
    number: 2
  }
  const reservation = render(
    <Reservations
      reservation={mockReservation}
      />
  )

  it('should render the correct content', () => {
    const { getByText } = reservation
    const resName = getByText('Christie')
    const resDate = getByText('Date: 8/8')
    const resTime = getByText('5:00 pm')
    const resGuests = getByText('Number of guests: 2')
    const resButton = getByText('Cancel')
    expect(resName).toBeInTheDocument();
    expect(resDate).toBeInTheDocument();
    expect(resTime).toBeInTheDocument();
    expect(resGuests).toBeInTheDocument();
    expect(resButton).toBeInTheDocument();
  })
})