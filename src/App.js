import React, { useState } from 'react';
import palavras from './palavras';

let n
function getRandomValue(min, max) {
   n = Math.random() * (max - min) + min;
   n =Math.floor(n)
  return n ;
}

export default function App() {
  /* const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] */
  const pc = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

  let underline = [];
  let escolhida = [];
  const [underlineInit, setUnderlineInit] = useState();
  const [palavraEscolhida, setPalavraEscolhia] = useState();
  const [desabilitado, setdesabilitado] = useState(false);

  const [corrige, setCorrige] = useState([]);
 

/* =========================================================================================================================================================================*/
  function escolherAPalavra(p) {
    escolhida = p[getRandomValue(0, 230)].split("");
    setPalavraEscolhia(escolhida);
    
    for (let i = 0; i < escolhida.length; i++)
      underline.push("_ ");
    setUnderlineInit(underline);
    setdesabilitado(true)
   
    
  }
  /*=======================================================================================================================================================================*/
  
  let [escolhidaPosicao, setEscolhidaPosicao] = useState();
  let [erro, setErro] = useState(0);
  const [clicados, setClicados] = useState([]);
/* ============================================================================================================================================================================== */
  function clickTecla(t) {
    let status = false;
    setClicados([...clicados, t])
   /*  setCorrige(...underlineInit) */
    

    for (let i = 0; i < palavraEscolhida.length; i++) {
      escolhidaPosicao = t;
      setEscolhidaPosicao(t)

      if ((t === palavraEscolhida[i]) || (t === 'u' && palavraEscolhida[i] === 'ú') || (t === 'o' && palavraEscolhida[i] === ('ô' && 'ò' && 'ô' && 'ó'))
        || (t === 'e' && palavraEscolhida[i] === ('é' && 'è' && 'ê')) || (t === 'i' && palavraEscolhida[i] === 'í') || (t === 'a' && palavraEscolhida[i] === ('à' && 'á' && 'ã'))
        || (t === 'c' && palavraEscolhida[i] === 'ç')
      ) {
        underlineInit[i] = palavraEscolhida[i]
        status = true;
        setCorrige([...palavraEscolhida])

      }

    }

    if (status === false) setErro(erro + 1)
    console.log(corrige)
  }
/* ===================================================================================================================================================================================== */

  const [verifica, setVerifica] = useState("");
  let [chute, setChute] = useState("")
/* ================================================================================================================================================================================= */
  function chutar (){
    if(verifica===palavras[n])
    setChute(verifica);
  }
/* ================================================================================================================================================================================= */
  
  console.log(palavraEscolhida)
  console.log(palavras[n])
  
  return (
    <div>
      <div className="conteiner">
        <div className="topo">
          <img src={`./assets/forca${erro}.png`}></img>
          <div className="palavras">
            <button className="escolhaPalavra" disabled={desabilitado} onClick={() => escolherAPalavra(palavras)} >Escolher Palavra</button>
            <p className={`${(erro === 6) ? "red" : ""} ${(chute===palavras[n] || palavraEscolhida===underlineInit) ? "green" : ""}` }>
              {((erro === 6) || (chute===palavras[n]) ? palavraEscolhida : underlineInit)} 
            </p>
          </div>
        </div>

        <div className="teclas">
          <div className="teclado">
            {pc.map((a, index) => <button key={index}  className={`letras ${(palavraEscolhida !== undefined) ? "teclasHabilitadas" : ""}
            ${clicados.includes(a) || (erro===6) || (chute===palavras[n]) ? "clicado" : ""} 
             `} onClick={() => clickTecla(a, index)} 
               disabled={(clicados.includes(a) || (erro===6) || (chute===palavras[n]) || (palavraEscolhida===undefined)) ? true : false } >{a}</button>)}

          </div>
          <div className="chute">
            <p>Já sei a palavra!</p>
            <input disabled={(palavraEscolhida===undefined) ? true : false } 
              value={verifica} onChange={e => setVerifica(e.target.value)} type="text" id="palavra" name="chute"></input>

            <button disabled={(erro===6) || (chute===palavras[n]) || (palavraEscolhida===undefined) ? true : false }  className={`chutar-desabilitado ${(palavraEscolhida !== undefined) ? "chutar-habilitado" : "chutar-desabilitado"}`}  onClick={chutar} >Chutar</button>
          </div>
        </div>
      </div>

    </div>

  );
}