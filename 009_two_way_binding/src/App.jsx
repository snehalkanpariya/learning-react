import React from 'react'
import Objects from './components/Objects'
import Arrays from './components/Arrays'
import Two_Way_Binding from './components/Two_Way_Binding'
import BasicFrom  from './components/Two_Way_Binding'
import { UniversalForm } from './components/Two_Way_Binding'
const App = () => {
  return (
    <div className='App'>
     <h1>Objects Practice</h1>
    <div className='objects'> 
      <Objects />
    </div>
    <h1> Arrays Pracrice </h1>
    <div className="Arrays">
      <Arrays />
    </div>
    <div className="binding">
      <BasicFrom />
    </div>
    <div className="universal">
      <UniversalForm />
    </div>
    </div>
  )
}

export default App
