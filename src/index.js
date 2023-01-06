import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Boton = (props) => <button onClick={props.answer}>{props.text}</button>


//Quiero que esta mierda no me renderise hasta que no presione un boton aunque sea una vez
//Como se supone que deberia renderizarse hecho de manera correcta
//https://github.com/EdgarAlvarado24/my-app/blob/master/Captura%20desde%202023-01-06%2015-45-01.png
const Statistics = (props) => {
  console.log(props.valor === 0);
  if(props.valor === 0){
    return (
      <div>
        no feedack given
      </div>
    )
  }

  return(
    <div> 
      {props.texto} {props.valor}
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad
  const promedio = (good-bad)/total  //+6 0 -1 / 9 = 0.55555556
  const porcentaje = (good*100)/total


  const setToGood = (newGood) => () =>{
    setGood(newGood)
  }
  const setToNeutral = (newNeutral) => () =>{
    setNeutral(newNeutral)
  }
  const setToBad = (newBad) => () =>{
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedack</h1>
      <Boton answer={setToGood(good + 1)} text="Good" />
      <Boton answer={setToNeutral(neutral + 1)} text="Neutral" />
      <Boton answer={setToBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics texto="good" valor={good} />
      <Statistics texto="neutral" valor={neutral} />
      <Statistics texto="bad" valor={bad} />
      <Statistics texto="total" valor={total} />
      <Statistics texto="promedio" valor={promedio} />
      <Statistics texto="porcentaje" valor={porcentaje} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

