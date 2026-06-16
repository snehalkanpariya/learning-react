import React from 'react'

function handleClick(){
  alert('You clicked the button!')
}

function deleteItem(args){
  console.log(`Deleted items ${args}`)
}

function FormSubmit(){
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`Form is submitted through the react function ${e.target[0].value}`)
  }
}
const App = () => {
  return (
    <div className="App">
      <input type="Text" placeholder="Type something..." onChange={(e) => console.log(e.target.value)} />
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={()=> deleteItem(1)}> Delete Item 1</button>

      <form onSubmit={FormSubmit}>
        <input type="text" placeholder="Type something..." />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
