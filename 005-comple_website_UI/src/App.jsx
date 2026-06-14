import FirstPage from './components/page1/FirstPage'
import SecondPage from './components/page1/SecondPage'
import ThirdPage from './components/page1/ThirdPage'

function App() { 
  return(
    <>
    <div className="w-full h-screen flex items-center justify-center bg-[#5D7B5F]">
      <FirstPage />
    </div>
    
    <div className="w-full h-screen flex items-center justify-center bg-[#5D7B5F]">
      <SecondPage />
    </div>
    
    <div className="w-full h-screen flex items-center justify-center bg-[#5D7B5F]">
      <ThirdPage />
    </div>
    </>
  );
}

export default App
