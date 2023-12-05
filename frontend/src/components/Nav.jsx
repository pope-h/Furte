import { useState } from 'react'
import { navLinks } from '../constants'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='padding-x py-8 z-10 absolute top-0 w-full'>
        <nav className='flex justify-between lg:items-center max-container'>
            <div className='hidden max-lg:block cursor-pointer pt-2 max-lg:pl-4' onClick={() => setMenuOpen(!menuOpen)}>
                <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} bx-md`}></i>
            </div>
            <h1 className="font-bold font-palanquin cursor-pointer text-3xl lg:pr-8 text-black hover:text-coral-red"><i className='bx bxl-firebase'></i>Furte</h1>
            <ul className={`lg:flex-1 flex max-lg:flex-col max-lg:pl-16 max-sm:pl-10 max-lg:bg-black max-lg:py-4 absolute lg:z-auto z-[-1] lg:static lg:items-center left-0 w-full gap-4 transition-all duration-500 ease-in ${menuOpen ? "top-20 opacity-100" : "top-[-490px]"} lg:opacity-100 opacity-0`}>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='text-slate-gray hover:text-red-600
                            fonts-montserrat leading-normal text-lg max-lg:text-white-400 hover:no-underline'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='flex lg:flex-1 justify-end max-lg:pr-4 items-center gap-6 text-slate-gray'>
                <i className='bx bx-search bx-sm hover:text-coral-red cursor-pointer'></i>
                <i className='bx bx-user bx-sm hover:text-coral-red cursor-pointer'></i>
                <i className='bx bx-cart bx-sm hover:text-coral-red cursor-pointer'></i>
            </div>
        </nav>
    </header>
  )
}

export default Nav