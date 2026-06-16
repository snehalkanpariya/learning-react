
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
function App() {
  return(
    <div className='container'>
     <h1><WelcomeMessage name="Alice" site="My Website" /> </h1>
     <h2> <WelcomeMessage name="Bob" site="My Website" /> </h2>
    </div>
  )
}
export default App