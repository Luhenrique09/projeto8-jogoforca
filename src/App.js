import React from 'react';
import palavras from './palavras';

function Teclado(props) {
  return (
    <div class="teclado">
      {props.letras}
    </div>
  )
}

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  return (
    <div>
      <div class="conteiner">
        <div class="topo">
          <img src="./assets/forca0.png"></img>
          <button class="escolhaPalavra">Escolher Palavra</button>
        </div>

        <div class="teclas">
          <Teclado letras={alfabeto.map((a) => <button class="letras">{a}</button>)} />

          <div class="chute">
            <p>Já sei a palavra!</p>
            <input type="text" id="palavra" name="chute"></input>
            <button class="chutar">Chutar</button>
          </div>
        </div>
      </div>


    </div>

  );
}