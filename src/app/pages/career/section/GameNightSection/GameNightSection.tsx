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
    <section className="py-16 px-6 md:px-12 lg:px-16 min-h-screen">
      {/* Header Content */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary block mb-2">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Weekend Game Nights
        </h2>
        <p className="text-gray text-sm md:text-base leading-relaxed">
          Every weekend, our team comes together for game nights that foster camaraderie and collaboration. 
          Join us as we celebrate teamwork, creativity, and a little friendly competition!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 h-full justify-between order-2 md:order-1">
          {sideImagesLeft.map((img) => (
            <div key={img.id} className="relative aspect-square md:h-1/3 w-full bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs bg-gray-200">
                Placeholder
              </div>
            </div>
          ))}
        </div>

        {/* Center Main Feature Column */}
        <div className="md:col-span-2 order-1 md:order-2">
          <div className="relative min-h-75 md:h-full w-full bg-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
              Main Feature Image
            </div>
          </div>
        </div>

        {/* Right Column*/}
        <div className="flex flex-col gap-4 h-full justify-between order-3">
          {sideImagesRight.map((img) => (
            <div key={img.id} className="relative aspect-square md:h-1/3 w-full bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs bg-gray-200">
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