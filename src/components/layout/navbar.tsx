import { Briefcase, Cloud, DollarSign, Menu, Puzzle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 sm:bottom-3 left-1/2 sm:border-2 border-t-2 -translate-x-1/2 bg-[#0A3D2E] text-white sm:py-2 sm:px-5 xl:px-10 rounded-tl-3xl rounded-tr-3xl sm:rounded-xl flex items-center xl:gap-10 sm:gap-6 shadow-2xl z-50 sm:min-w-140 justify-evenly sm:w-auto w-full">

      <Link href="#" className="hover:text-yellow-400 text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-2">
        <span className='sm:hidden'>
          <Image src="/projects_icon.svg" alt="projects_icon" width={24} height={24} />
        </span>
        Projects
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-2">
        <span className='sm:hidden'>
          <Image src="/services_icon.svg" alt="services_icon" width={24} height={24} />
        </span>
        Services
      </Link>

      <Link href="#" className="bg-primary border-8 sm:border-none border-white sm:bg-white text-[#0A3D2E] px-4 lm:px-6 py-2 rounded-[30px] sm:rounded-lg font-bold flex items-center gap-2 -translate-y-8 lm:-translate-y-10 sm:translate-y-0 sm:static h-22 lm:h-24 w-max sm:w-auto sm:h-auto">

        <span className="w-3.5 h-3.5 bg-transparent absolute -left-5.5 top-6 lm:top-8 rounded-tr-[11px] sm:hidden myShadow1"></span>
        <span className="w-3.5 h-3.5 bg-transparent absolute -right-5.5 top-6 lm:top-8 rounded-tl-[11px] sm:hidden myShadow2"></span>
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
            width={24}
            height={24}
            className="block sm:hidden w-8 h-8"
          />
        </span>

        <span className='hidden sm:block'>
          Start a Project
        </span>
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-2">
        <span className='sm:hidden'>
          <Image src="/doller_icon.svg" alt="doller_icon" width={24} height={24} />
        </span>
        Pricing
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-2">
        <span className='sm:hidden'>
          <Image src="/menu_icon.svg" alt="menu_icon" width={24} height={24} />
        </span>
        More
      </Link>
    </nav>
  )
}

export default Navbar
