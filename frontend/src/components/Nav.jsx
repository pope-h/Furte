import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <h1 className="font-bold font-palanquin cursor-pointer text-3xl pr-8 text-black hover:text-red-600"><i className='bx bxl-firebase'></i>Furte</h1>
            <ul className='flex-1 flex justify-start items-center gap-4 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className='text-slate-gray hover:text-red-600
                            fonts-montserrat leading-normal text-lg'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='flex flex-1 justify-end items-center gap-4 max-lg:hidden text-slate-gray'>
                <i className='bx bx-search bx-sm hover:text-red-600'></i>
                <i className='bx bx-user bx-sm hover:text-red-600'></i>
                <i className='bx bx-cart bx-sm hover:text-red-600'></i>
            </div>
            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt='Hamburger'
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav