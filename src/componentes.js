import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
/*
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
*/
/*
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks, 
      left: clicks.left + 1 
    }
    setClicks(newClicks)
  }
  
  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
}
*/
/*
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left"/> 
      <Button onClick={handleRightClick} text="left"/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

*/
const Display = props => <div>{props.value}</div>

const Boton = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () =>{
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      <Boton handleClick={setToValue(1000)} text="thousand" />
      <Boton handleClick={setToValue(0)} text="reset" />
      <Boton handleClick={setToValue(value + 1)} text="increment" />
    </div>

  )
}

// ReactDOM.render(setToValue
//   <App />, 
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

