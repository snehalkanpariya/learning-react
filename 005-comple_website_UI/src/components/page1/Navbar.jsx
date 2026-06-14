import { Search } from "lucide-react";
import { Handbag } from "lucide-react";
function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 mx-auto w-[85%] pt-6 px-4 bg-transparent z-50">
      
      <div className="h-16 w-full flex items-center justify-between px-6 bg-gray-200 rounded-xl shadow-lg">
        
        {/* 1. Left Side: Logo */}
        <div className="w-1/4 flex items-center">
          <h2 className="text-2xl font-bold text-green-700">Poulls</h2>
        </div>

        {/* 2. Center Side: Links */}
        <nav className="w-1/2 flex justify-center text-black text-lg">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Fluid</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Real Estate</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Counch</a></li>
          </ul>
        </nav>
        
        {/* 3. Right Side: Search, Divider, and Profile Box */}
        {/* Changed pl-4 to pr-2 to properly space it from the right border edge */}
        <div className="w-1/4 flex items-center justify-end space-x-4 pr-2 pl-4"> 
          
          {/* Search Icon with a pointer cursor */}
          <Search className="text-gray-700 hover:text-black cursor-pointer size-5" /> 
          
          {/* Gray Vertical Divider Line */}
          <span className="text-gray-400 font-light">|</span> 
          
          {/* Profile Box */}
          <div className="w-fit h-9 rounded-md bg-green-700 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-gray-700 transition">
           <Handbag /> Get In Touch
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;