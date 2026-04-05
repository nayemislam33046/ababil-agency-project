import Image from 'next/image'
import Link from 'next/link'

const CenterButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="#"
        className="
          group relative flex items-center justify-center overflow-hidden 
          rounded-[15px] xsm:rounded-[20px] sm:rounded-lg
          w-16 h-16 xsm:w-20 xsm:h-20 lm:w-22 lm:h-22 
          sm:w-auto sm:h-auto -translate-y-9 xsm:-translate-y-12 lm:-translate-y-14 sm:translate-y-0
          p-0.75 shadow-[0_0_15px_rgba(253,224,71,0.3)] 
        "
      >
        {/* ANIMATED GRADIENT LAYER (Light Yellow) */}
        <span className="
          absolute inset-[-500%] 
          animate-border-spin bg-[conic-gradient(transparent,transparent,#FDE047)]          
        " />

        {/* INNER CONTENT CONTAINER */}
        <div className="
          relative z-10 w-full h-full 
          flex items-center justify-center gap-2 font-bold
          rounded-[inherit] 
          bg-primary sm:bg-white 
          px-4 lm:px-6 py-2
        ">
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
            width={32}
            height={32}
            className="block sm:hidden"
          />
          <span className="hidden sm:block text-[#0A3D2E]">
            Start a Project
          </span>
        </div>
      </Link>
    </div>
  )
}

export default CenterButton