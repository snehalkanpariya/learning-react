import Navbar from './Navbar.jsx'
import BackgroundImage from './BackgroundImage.jsx'
import SearchBar from './SearchBar.jsx'
function FirstPage(){
    return(
   <div className="w-[90%] h-screen flex-col items-center justify-center bg-[#F4F9F2]"> 
         <Navbar />
         <BackgroundImage />
         <SearchBar />
    </div>
    )
}


export default FirstPage