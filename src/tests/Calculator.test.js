import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let buttonAdd;
  let buttonMinus;
  let buttonMultiply;
  let buttonDivide;
  let buttonEquals;
  let runningTotal;
  let buttonClear;


  beforeEach(() => {
    container = render(<Calculator />)
    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    button0 = container.getByTestId('number0');
    buttonAdd = container.getByTestId('operator_add');
    buttonMinus = container.getByTestId('operator-subtract');
    buttonMultiply = container.getByTestId('operator-multiply');
    buttonDivide = container.getByTestId('operator-divide');
    buttonEquals = container.getByTestId('operator-equals');
    runningTotal = container.getByTestId('running-total');
    buttonClear = container.getByTestId('clear');
  })

  it('should change running total on number enter', () => {
    button4;
    runningTotal;
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should check add function operates as expected', () => {
    button4;
    buttonAdd;
    button1;
    buttonEquals;
    runningTotal;
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should check the subtract function operates as expected', () => {
    button7;
    buttonMinus;
    button4;
    buttonEquals;
    runningTotal;
    fireEvent.click(button7);
    fireEvent.click(buttonMinus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should check the multiply function operates as expected', () => {
    button3;
    buttonMultiply;
    button5;
    buttonEquals;
    runningTotal;
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should check the divide function operates as expected', () => {
    button2;
    button1;
    buttonDivide;
    button7;
    buttonEquals;
    runningTotal;
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple button clicks', () => {
    button2;
    button2;
    runningTotal;
    fireEvent.click(button2);
    fireEvent.click(button2);
    expect(runningTotal.textContent).toEqual('22');
  })

  it('should chain multpile operations together', () => {
    button2;
    buttonAdd;
    button7;
    buttonDivide;
    button3;
    runningTotal;
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonDivide);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should clear the display to zero on clear', () => {
    button8;
    buttonDivide;
    button2;
    buttonEquals;
    buttonClear;
    buttonAdd;
    button7;
    buttonEquals;
    runningTotal;
    fireEvent.click(button8);
    fireEvent.click(buttonDivide);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('11');
  })

})



