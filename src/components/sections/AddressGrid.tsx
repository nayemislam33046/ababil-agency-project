import React from 'react';

const locations = [
  { country: 'United States', address: '16 Cove Road', city: 'Mount Arlington, NJ 07856' },
  { country: 'Australia', address: '155 Bennett Rd, St Clair NSW', city: '2759' },
  { country: 'South Africa', address: '55 Mons Rd, Bellevue East,', city: 'Johannesburg, 2198' },
  { country: 'Singapore', address: '6 Raffles Blvd, Marina', city: 'Square' },
  { country: 'Italy', address: 'Via Bari, 9, 03043 Cassino,', city: 'FR' },
  { country: 'Dubai', address: 'Al Fattan Downtown - 32d St -', city: 'Al Satwa' },
  { country: 'Cyprus', address: 'Esfios 5, Strovolos', city: '2001' },
  { country: 'Bangladesh', address: 'Ventura Iconia, Plot 37 Road', city: 'No. 11, Banani, Dhaka 1213' },
];

export default function AddressGrid() {
  return (
    <section className="bg-black py-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 flex flex-col items-center text-center justify-center min-h-[140px]"
            >
              <p className="text-white font-bold text-lg md:text-xl mb-2">
                {loc.country}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {loc.address}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {loc.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}