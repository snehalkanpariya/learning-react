import React from 'react'
import Counter from './components/Counter'
import FormInput from './components/formInput'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1> Here i am practicing React hooks </h1>
      <Counter />
      <FormInput />
    </div>
  )
}

export default App
