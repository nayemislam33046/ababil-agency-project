import Image from 'next/image'
import Link from 'next/link'

const CenterButton = () => {
  return (
    <div>
      <Link
        href="#"
        className="
    glow-border
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
    </div>
  )
}

export default CenterButton