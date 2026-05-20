const GameNightSection = () => {
  const sideImagesLeft = [
    { id: 1, src: '/images/game-1.jpg', alt: 'Team playing board games' },
    { id: 2, src: '/images/game-2.jpg', alt: 'Console gaming session' },
    { id: 3, src: '/images/game-3.jpg', alt: 'Smiles during trivia night' },
  ];

  const mainImage = {
    src: '/images/game-main.jpg',
    alt: 'Main weekend game night feature',
  };

  const sideImagesRight = [
    { id: 4, src: '/images/game-4.jpg', alt: 'Card game competition' },
    { id: 5, src: '/images/game-5.jpg', alt: 'Team high-fiving' },
    { id: 6, src: '/images/game-6.jpg', alt: 'Arcade tournament' },
  ];

  return (
    <section className="h-screen md:h-auto min-h-screen w-full flex flex-col justify-between px-6 md:py-10 md:px-12 lg:px-16 bg-white overflow-hidden md:overflow-visible">
      
      {/* Header Content */}
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 shrink-0 mt-4 md:mt-0">
        <span className="text-sm font-bold tracking-widest text-primary uppercase">
          Activities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary my-4 leading-tight">
          Weekend Game Nights
        </h2>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg text-wrap line-clamp-2 md:line-clamp-none">
          Every weekend, our team comes together for game nights that foster camaraderie and collaboration. 
          Join us as we celebrate teamwork, creativity, and a little friendly competition!
        </p>
      </div>

      {/* Gallery Grid */}
      
      <div className="flex-1 flex flex-col sm:grid sm:grid-cols-4 gap-5 min-h-0 sm:min-h-112.5 lg:min-h-125 pb-4 md:pb-0">
        {/* Left Column*/}
        <div className="grid grid-cols-3 sm:grid-cols-1 sm:grid-rows-3 gap-5 md:gap-4 h-[20%] sm:h-full order-1">
          {sideImagesLeft.map((img) => (
            <div 
              key={img.id} 
              className="relative h-full w-full bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] sm:text-xs bg-gray-200 font-medium">
                Placeholder
              </div>
            </div>
          ))}
        </div>

        {/* Center Main Feature Column */}
        <div className="flex-1 sm:col-span-2 order-2 min-h-0">
          <div className="relative h-full w-full bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold text-sm sm:text-base bg-gray-200">
              Main Feature Image
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-3 sm:grid-cols-1 sm:grid-rows-3 gap-5 h-[20%] sm:h-full order-3">
          {sideImagesRight.map((img) => (
            <div 
              key={img.id} 
              className="relative h-full w-full bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] sm:text-xs bg-gray-200 font-medium flex-1">
                Placeholder
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GameNightSection;