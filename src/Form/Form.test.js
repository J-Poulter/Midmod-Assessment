import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
   
  })
  afterEach(cleanup)

  it('should render the correct content', () => {
    const mockSubmit = jest.fn()
    const form = render(
      <Form submitNewRes={mockSubmit}/>
    )
    const { getByPlaceholderText, getByText } = form;
    const nameInput = getByPlaceholderText('Name')
    const dateInput = getByPlaceholderText('Date (mm/dd)')
    const timeInput = getByPlaceholderText('Time')
    const guestsInput = getByPlaceholderText('Number of guests')
    const submitButton = getByText('Make Reservation')

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })

  it('should update forms state as input is entereed', () => {
    const mockSubmit = jest.fn()
    const form = render(
      <Form submitNewRes={mockSubmit}/>
    )
    const { getByPlaceholderText, getByText } = form;
      
    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'mockName'}
    })
    expect(getByPlaceholderText('Name').value).toBe('mockName')

    fireEvent.change(getByPlaceholderText('Date (mm/dd)'), {
      target: { value: '01/01'}
    })
    expect(getByPlaceholderText('Date (mm/dd)').value).toBe('01/01')

    fireEvent.change(getByPlaceholderText('Time'), {
      target: { value: '12:00'}
    })
    expect(getByPlaceholderText('Time').value).toBe('12:00')

    fireEvent.change(getByPlaceholderText('Number of guests'), {
      target: { value: '5'}
    })
    expect(getByPlaceholderText('Number of guests').value).toBe('5')

    fireEvent.click(getByText('Make Reservation'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
    expect(mockSubmit).toHaveBeenCalledWith({
      guestname: 'mockName',
      date: '01/01',
      time: '12:00',
      guests: '5'
    })
  })
  
})