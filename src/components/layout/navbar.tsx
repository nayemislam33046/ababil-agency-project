import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 sm:bottom-3 left-1/2 -translate-x-1/2 text-white flex items-center z-50 sm:min-w-140 justify-between sm:w-auto w-full       
      sm:bg-[#0A3D2E] sm:border-2 sm:py-2 sm:px-10 sm:rounded-xl sm:shadow-2xl gap-4 sm:gap-6 xl:gap-10
      bg-transparent px-8">

      {/* --- Mobile Background Image --- */}
      <div className="absolute -inset-2 lm:-inset-4 -z-10 block sm:hidden">
        <Image
          src={'/assets/nav-bg.png'}
          alt="nav-background"
          fill
          className="object-fill"
          priority
        />
      </div>

      <Link href="#" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-1 xsm:gap-2 xsm:w-9 w-7">
        <span className='sm:hidden'>
          <Image src="/projects_icon.svg" alt="projects_icon" width={24} height={24} />
        </span>
        Projects
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-1 xsm:gap-2 xsm:w-9 w-7">
        <span className='sm:hidden'>
          <Image src="/services_icon.svg" alt="services_icon" width={24} height={24} />
        </span>
        Services
      </Link>

      <Link
        href="#"
        className="
    bg-[linear-gradient(3.56deg,#063D30_2.75%,#08503F_97.25%)] 
    sm:bg-white sm:bg-none border border-white sm:border-none 
    flex items-center justify-center gap-2 
    rounded-[15px] xsm:rounded-[20px] sm:rounded-lg font-bold 
    w-15 h-15 xsm:w-20 xsm:h-20 lm:h-22 xlm:h-22 xlm:w-24 lm:w-22 sm:w-auto sm:h-auto 
    -translate-y-9 xsm:-translate-y-12 lm:-translate-y-14 xlm:-translate-y-14 sm:translate-y-0 
    sm:static px-4 lm:px-6 py-2 z-10
    text-white sm:text-[#0A3D2E]"
      >
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

        <span className='hidden sm:block'>
          Start a Project
        </span>
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-1 xsm:gap-2 xsm:w-9 w-7">
        <span className='sm:hidden'>
          <Image src="/doller_icon.svg" alt="doller_icon" width={24} height={24} />
        </span>
        Pricing
      </Link>

      <Link href="#" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-1 xsm:gap-2 xsm:w-9 w-7">
        <span className='sm:hidden'>
          <Image src="/menu_icon.svg" alt="menu_icon" width={24} height={24} />
        </span>
        More
      </Link>
    </nav>
  )
}

export default Navbar