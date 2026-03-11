import { Briefcase, Cloud, DollarSign, Menu, Puzzle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 sm:bottom-3 left-1/2 -translate-x-1/2 bg-[#0A3D2E] text-white py-4 sm:py-2 sm:px-5 xl:px-10 rounded-tl-4xl rounded-tr-4xl sm:rounded-xl flex items-center xl:gap-10 sm:gap-6 shadow-2xl z-50 sm:min-w-140 justify-evenly sm:w-auto w-full">

      <Link href="#" className="hover:text-yellow-400 text-sm font-medium flex justify-center items-center flex-col">
        <span className='sm:hidden'>
          <Briefcase size={20} />
        </span>
        Projects
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-sm font-medium flex justify-center items-center flex-col">
        <span className='sm:hidden'>
          <Puzzle size={20} />
        </span>
        Services
      </Link>

      <button className="bg-primary border-6 border-white sm:bg-white text-[#0A3D2E] px-6 py-2 rounded-xl sm:rounded-lg font-bold flex items-center gap-2 absolute -top-8 left-[43%] sm:static w-max h-20 sm:w-auto sm:h-auto">

        <span>
          <Image
            src="/logoIcon.png"
            alt="ababil-icon"
            width={20}
            height={20}
            className="hidden sm:block"
          />
          <Image
            src="/white_logo.svg"
            alt="ababil-icon"
            width={20}
            height={20}
            className="block sm:hidden w-8 h-8"
          />
        </span>

        <span className='hidden sm:block'>
          Start a Project
        </span>
      </button>
      <button className='bg-red-500 z-50 sm:hidden w-16'>dd</button>

      <Link href="#" className="hover:text-yellow-400 text-sm font-medium flex justify-center items-center flex-col">
        <span className='sm:hidden'>
          <DollarSign size={20} />
        </span>
        Pricing
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-sm font-medium flex justify-center items-center flex-col">
        <span className='sm:hidden'>
          <Menu size={20} />
        </span>
        More
      </Link>
    </nav>
  )
}

export default Navbar



// import { Briefcase, DollarSign, Menu, Puzzle } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const navItem =
//   "hover:text-yellow-400 text-sm font-medium flex flex-col items-center justify-center";

// const Navbar = () => {
//   return (
//     <nav className="fixed bottom-0 sm:bottom-3 left-1/2 -translate-x-1/2 bg-[#0A3D2E] text-white py-4 sm:py-2 sm:px-5 xl:px-10 rounded-tl-4xl rounded-tr-4xl sm:rounded-xl flex items-center justify-evenly xl:gap-10 sm:gap-6 shadow-2xl z-50 sm:min-w-140 w-full sm:w-auto">

//       <Link href="#" className={navItem}>
//         <span className="sm:hidden">
//           <Briefcase size={20} />
//         </span>
//         Projects
//       </Link>

//       <Link href="#" className={navItem}>
//         <span className="sm:hidden">
//           <Puzzle size={20} />
//         </span>
//         Services
//       </Link>

//       {/* Center Button */}
//       <Link href="#" className="absolute -top-8 sm:static flex items-center gap-2 px-6 py-2 h-20 sm:h-auto w-max sm:w-auto rounded-xl sm:rounded-lg font-bold border-6 border-white bg-primary sm:bg-white text-[#0A3D2E]">

//         {/* Logo */}
//         <span className="relative w-8 h-8 sm:w-5 sm:h-5">
//           <Image
//             src="/logoIcon.png"
//             alt="ababil-icon"
//             fill
//             className="hidden sm:block object-contain"
//           />
//           <Image
//             src="/white_logo.svg"
//             alt="ababil-icon"
//             fill
//             className="block sm:hidden object-contain"
//           />
//         </span>

//         <span className="hidden sm:block">Start a Project</span>
//       </Link>

//       <Link href="#" className={navItem}>
//         <span className="sm:hidden">
//           <DollarSign size={20} />
//         </span>
//         Pricing
//       </Link>

//       <Link href="#" className={navItem}>
//         <span className="sm:hidden">
//           <Menu size={20} />
//         </span>
//         More
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;