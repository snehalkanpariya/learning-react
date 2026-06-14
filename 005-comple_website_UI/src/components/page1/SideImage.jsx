import { Leaf, Sparkles } from "lucide-react";

function SideImage() {
  return (
    <div className="relative p-3 bg-white rounded-3xl shadow-lg border border-gray-100/50 max-w-[360px] md:max-w-[420px] transition-transform duration-300 hover:scale-[1.02]">
      {/* Top-Left Badge */}
      <div className="absolute -top-4 -left-4 bg-[#3B5B3E] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md z-20">
        <div className="bg-white/20 p-1 rounded-full">
          <Leaf className="size-4 text-white fill-white" />
        </div>
        <span className="text-xs font-bold tracking-wide">Eco Home</span>
      </div>

      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl">
        <img 
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80" 
          alt="Poulls Wood Chalet" 
          className="w-full h-[200px] md:h-[260px] object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>

      {/* Bottom-Right Badge */}
      <div className="absolute -bottom-4 -right-4 bg-orange-100 border-2 border-white p-3 rounded-full shadow-md z-20 flex items-center justify-center">
        <Sparkles className="size-5 text-orange-600 fill-orange-600" />
      </div>
    </div>
  );
}

export default SideImage;