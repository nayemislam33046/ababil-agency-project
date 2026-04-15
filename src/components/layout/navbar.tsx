import Image from 'next/image'
import Link from 'next/link'
import CenterButton from './centerButton'

const Navbar = () => {
  return (
    <>
      <div className="fixed -bottom-5 left-0 w-full h-24 z-40 pointer-events-none hidden sm:block">
        <div className="
    w-full h-full
    backdrop-blur-[5px]
    bg-white/10
    mask-[linear-gradient(to_top,black_0%,black_40%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_top,black_0%,black_40%,transparent_100%)]
  "></div>
      </div>

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

        <CenterButton />

        <Link href="/pages/pricing" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex justify-center items-center flex-col gap-1 xsm:gap-2 xsm:w-9 w-7">
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
    </>
  )
}

export default Navbar