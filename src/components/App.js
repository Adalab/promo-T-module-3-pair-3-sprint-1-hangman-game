import '../scss/main.scss';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState('0');
  const [letter, setLetter] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    setNumberOfErrors(parseInt(numberOfErrors) + parseInt(1));
    console.log(numberOfErrors);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setLetter(result);
  };

    /*const handleInput = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;

    if (inputValue === 't') {
      setLetter(inputValue);
      console.log(inputValue);
    } else if (inputValue === 'o') {
      setLetter(inputValue);
    } else {
      setLetter(inputValue);
    }
  };*/

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
              <li className='letter'>k</li>
              <li className='letter'>a</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>a</li>
              <li className='letter'>k</li>
              <li className='letter'>r</li>
              <li className='letter'>{letter}</li>
              <li className='letter'>k</li>
              <li className='letter'>e</li>
              <li className='letter'>r</li>
            </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autocomplete='off'
              className='form__input'
              maxlength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={letter}
              pattern='[A-Za-z]'
              //onInput={handleInput}
              onChange={handleInputChange}
            />
          </form>
          <button onClick={handleClick}>Incrementar</button>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
