import SideImage from './SideImage.jsx'
import { MapPin } from "lucide-react";

function SecondPage(){
    return(
      <div className="flex flex-col items-center justify-center w-[90%] h-[60%] bg-[#F4F9F2] -mt-60 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 py-8 md:py-0 gap-8 md:gap-16">
          
          {/* Left Column: Image Card */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <SideImage />
          </div>

          {/* Right Column: Welcome Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B5B3E] tracking-tight mb-4 leading-tight">
              Welcome on Treopps?
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              Bespoke collection of modular eco-friendly homes designed for modern, sustainable living. We create spaces that are energy-efficient, beautifully integrated with nature, and designed for ultimate comfort.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="bg-[#3B5B3E] hover:bg-[#2C442E] text-white text-sm md:text-base px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0">
                <MapPin className="size-4" /> Tour details
              </button>
              
              <a 
                href="#" 
                className="text-[#3B5B3E] hover:text-[#2C442E] text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer hover:underline"
              >
                Ask us
              </a>
            </div>
          </div>

        </div>
      </div>
    )
}
export default SecondPage