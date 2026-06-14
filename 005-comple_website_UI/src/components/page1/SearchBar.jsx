import { User } from "lucide-react";
import { SearchCheck } from "lucide-react";
import { Info } from "lucide-react";
function SearchBar() {
  return (
    <div className="relative z-20 gap-4 -mt-16 w-[80%] mx-auto h-[15%] bg-[#B5D9A7] rounded-full shadow-lg flex items-center justify-start px-6">
      <div className="w-[80%] h-[50%] bg-white rounded-full flex items-center justify-between px-4">
        <input
          type="text"
          placeholder="Search for villas,locations & many more..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder-text-sm pl-2"
        />
        <div className="flex items-center gap-3 text-gray-500 cursor-pointer">
          <User />
          <SearchCheck />
          <Info />
        </div>
      </div>
      <button className="cursor-pointer flex text-white text-center font-medium items-center justify-center hover:bg-green-700 w-[15%] h-[50%] bg-green-600 px-4 rounded-full -ml-[4px]">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
