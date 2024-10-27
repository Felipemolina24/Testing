import './App.css';
import { useState } from 'react';

function App() {
  const [player1, setPlayer1] = useState('');
  const [Player2, setPlayer2] = useState('');

  const [ganador, setGanador] = useState('')

  const enviarOpcion = () => {
    console.log("player1:", player1);
    console.log("player2:", Player2);


    if (player1 === Player2) {
      setGanador('TIE!')
      setPlayer1('')
      setPlayer2('')
      return
    }
    if (player1 === 'rock' && Player2 === 'paper') {
      setGanador('Player 2 wins!')
      setPlayer1('')
      setPlayer2('')
      return
    }
    if (player1 === 'paper' && Player2 === 'scissors') {
      setGanador('Player 2 wins!')
      setPlayer1('')
      setPlayer2('')
      return
    }
    if (player1 === 'scissors' && Player2 === 'rock') {
      setGanador('Player 2 wins!')
      setPlayer1('')
      setPlayer2('')
      return
    }

    setGanador('Player 1 wins!')
    setPlayer1('')
    setPlayer2('')

  };



  return (
    <div className="App">
      <div className='contenedor'>
        <h1>Piedra, papel y tijera</h1>
        <div>
          <div>
            <input
              type='text'
              placeholder='Opcion Player 1'
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <div className='opcion'>
            <input
              type='text'
              placeholder='Opcion Player 2'
              value={Player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
          <div className='boton'>
            <button onClick={enviarOpcion}>Elegir</button>
          </div>
        </div>
        <div>
          <h4 className='ganador'>
            {ganador}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
