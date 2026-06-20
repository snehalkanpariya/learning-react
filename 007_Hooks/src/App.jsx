import { useState,useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    document.title = `You clicked ${count} times`

    console.log(`UseEffect is worked the count is now ${count}`)
  }, [count])
  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: '#ffacac'}} className="App">
      <h1> Practice Hooks </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click Me! </button>

      <button onClick={() => setCount(0)}> Reset  </button>
    </div>
  )
}


const IncreaseDecrease = () =>{
  const[num,setNum]=useState(0)

  const increaseCount = () =>{
    setNum(num + 1)
  }
  const decreaseCount = () =>{
    setNum(num - 1)
  }
  return(
     <div className="container "> {num}
      <h1> Increase Decrease </h1>
      <p> You clicked {num} times</p>
      <button className="Increase" onClick={increaseCount}>Increase</button>
      <button className="Decrease" onClick={decreaseCount}>Decrease</button>
      </div>
  )
}
export default IncreaseDecrease
