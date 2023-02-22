
import { useState } from 'react';
import './App.css'

function App() {

  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    const operatorsProblem = 
    // OPERADOR SEM NUMERO OU OPERADOR APOS OPERADOR
    operators.includes(value) && calc === "" || operators.includes(value) && operators.includes(calc.slice(-1));

    if (operatorsProblem){
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const finalCalc = () => {
    if(calc==''){
      return
    }
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc === '') {
      return
    }
    const value = calc.slice(0, -1);
    setCalc(value)
    setResult(value)
  }

  const calculatorDigits = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const digitsDiv = calculatorDigits.map(number =>
      <button
        onClick={() => updateCalc(number.toString())}
        key={number}>{number}
      </button>)

  return (

    <div className="App">

      <section className='Calculator'>

        <div className='Display'>
          {result ? <span>{`(${result})`}</span> : ''}&nbsp;
          {calc || '0'}
        </div>

        <div className='Operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className='Digits'>
          {digitsDiv}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={finalCalc}>=</button>

        </div>

      </section>
    </div>
  )
}

export default App
