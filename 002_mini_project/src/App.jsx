
import Portfolio_Button from './components/Portfolio'
import Github_Button from './components/Github'
import Linkedin_button from './components/Linkedin'

function App() {

  return (
    
    <div className='portfolio'>
      <div className='avtar'>S</div>
      <h1 className='name'> Sneha </h1>
      <p className='location'> Bangalore, India </p>
      <p className='bio'> FrontEnd Developer </p> 

      <div className='linkContainers'>
        <Github_Button />
        <Linkedin_button />
        <Portfolio_Button />
      </div>
    </div>
    )
}

export default App
