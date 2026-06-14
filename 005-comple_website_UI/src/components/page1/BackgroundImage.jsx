function BackgroundImage() {
  return (
    <div className="w-full h-[90%]">
      
      {/* Using a verified, crisp 2K architecture villa image from Unsplash. 
         Notice the parameters at the end: &w=2000&q=90 ensures it loads perfectly clear.
      */}
      <div 
        className="w-full h-[90%] bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90')] bg-cover bg-center flex flex-col items-center justify-center relative"
      >
        {/* Optional: Dark tint overlay so your white text pops even better against a bright image */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        {/* Your text overlaid inside the image */}
        <div className="w-full flex justify-start">
        <h1 className="relative text-white text-4xl font-bold drop-shadow-xl tracking-wide z-10 pl-16">
            Find Eco-Friendly
            <br />
            Home Easily
        </h1>
        </div>

        <div className="w-full flex justify-start">
        <h2 className="relative text-white text-lg mt-2 drop-shadow-md z-10 pl-16">
          Clean lines, ultimate luxury. The peaceful retreat you deserve, <br />designed with the planet in mind.
        </h2>
        </div>
        <div className="w-full flex justify-start">
        <button className="relative mt-6 ml-16 px-6 py-3 bg-green-600 text-white font-semibold rounded-2xl border-2 border-white shadow-md hover:bg-green-700 transition-colors z-10">
  Explore Now
</button>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;