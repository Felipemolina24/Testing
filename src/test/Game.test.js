import  App  from '../App'
import { render, screen, fireEvent } from '@testing-library/react';

describe('Funciones para probar quien gano en  piedra, papel, tijera', () =>{

    test('debe mostrar "TIE!" cuando ambos jugadores eligen la misma opción', () => {
        render(<App />);
    
        const inputPlayer1 = screen.getByPlaceholderText('Opcion Player 1');
        const inputPlayer2 = screen.getByPlaceholderText('Opcion Player 2');
        const button = screen.getByText('Elegir');
    
        //Se Simulan los inputs para empate
        fireEvent.change(inputPlayer1, { target: { value: 'rock' } });
        fireEvent.change(inputPlayer2, { target: { value: 'rock' } });
        fireEvent.click(button);
    
        expect(screen.getByText('TIE!')).toBeInTheDocument();
      });

      test('debe mostrar "Player 2 wins!" cuando Player 1 elige "rock" y Player 2 elige "paper"', () => {
        render(<App />);
    
        const inputPlayer1 = screen.getByPlaceholderText('Opcion Player 1');
        const inputPlayer2 = screen.getByPlaceholderText('Opcion Player 2');
        const button = screen.getByText('Elegir');
    
        // Se Simulan para que Player 2 gane
        fireEvent.change(inputPlayer1, { target: { value: 'rock' } });
        fireEvent.change(inputPlayer2, { target: { value: 'paper' } });
        fireEvent.click(button);
    
        expect(screen.getByText('Player 2 wins!')).toBeInTheDocument();
      });
    
      test('debe mostrar "Player 1 wins!" cuando Player 1 elige "scissors" y Player 2 elige "paper"', () => {
        render(<App />);
    
        const inputPlayer1 = screen.getByPlaceholderText('Opcion Player 1');
        const inputPlayer2 = screen.getByPlaceholderText('Opcion Player 2');
        const button = screen.getByText('Elegir');
    
        // Se Simulan los inputs para que Player 1 gane
        fireEvent.change(inputPlayer1, { target: { value: 'scissors' } });
        fireEvent.change(inputPlayer2, { target: { value: 'paper' } });
        fireEvent.click(button);
    
        expect(screen.getByText('Player 1 wins!')).toBeInTheDocument();
      });
  
})