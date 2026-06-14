import React from 'react';

function ThirdPage() {
  const cardsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
      title: "Well Eco-Friendly Homes",
      description: "Energy efficient, high quality materials, built for sustainable living and future-proof comfort.",
      buttonText: "Learn More"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=500&q=80",
      title: "Sustainably Living Homes",
      description: "Pre-crafted templates designed with carbon neutral goals, using solar integration and smart energy systems.",
      buttonText: "Agent Cards"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
      title: "Comfortable Living",
      description: "Modern open-concept floorplans optimized for maximum airflow, natural light, and premium organic materials.",
      buttonText: "Agent Cards"
    }
  ];

  return (
    <div className="w-[90%] h-[85%] bg-[#EBF5EA] rounded-b-3xl shadow-xl flex flex-col items-center justify-between py-10 px-6 md:px-12 relative z-20">
      
      {/* Section Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-[#2C3A2E] text-2xl md:text-3xl font-extrabold tracking-wide">
          10 Reasons to Choose Us
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl px-2 md:px-6">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className="bg-white rounded-3xl p-4 shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Card Image */}
            <div className="overflow-hidden rounded-2xl h-40 md:h-48 mb-4">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Card Content */}
            <div className="flex flex-col flex-grow text-left">
              <h3 className="text-[#3B5B3E] font-bold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Card Button */}
            <div className="mt-auto">
              <button className="bg-[#3B5B3E] hover:bg-[#2C442E] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors duration-300 shadow-sm cursor-pointer">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex items-center gap-2 mt-6 md:mt-8">
        <span className="size-2 rounded-full bg-gray-300 transition-colors"></span>
        <span className="size-2.5 rounded-full bg-[#3B5B3E] transition-colors"></span>
        <span className="size-2 rounded-full bg-gray-300 transition-colors"></span>
        <span className="size-2 rounded-full bg-gray-300 transition-colors"></span>
        <span className="size-2 rounded-full bg-gray-300 transition-colors"></span>
      </div>

    </div>
  );
}

export default ThirdPage;
