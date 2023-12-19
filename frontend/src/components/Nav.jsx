import { useState } from 'react'
import { navLinks } from '../constants'
import { useNavigate } from 'react-router-dom';
import PopoverButton from './popover/PopoverButton';
import NotificationPopover from './popover/NotificationPopover';
import useStorePackage from '../store';
import UserSection from './UserSection';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();
    const { accessToken, userName, logout } = useStorePackage();
    console.log("User token:", accessToken);
    console.log("User Name:", userName);

    const toggleSearch = () => {
      setSearchOpen(!searchOpen);
    }

  return (
    <header className="padding-x py-6 z-10 absolute top-0 w-full">
      {!searchOpen ? (
        <nav className="flex justify-between lg:items-center max-container">
          <div
            className="hidden max-lg:block cursor-pointer pt-2 max-lg:pl-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} bx-md`}></i>
          </div>
          <h1
            className="font-bold font-palanquin cursor-pointer text-3xl lg:pr-8 text-black"
            onClick={() => navigate("/")}
          >
            <i className="bx bxl-firebase"></i>Furte
          </h1>
          <ul
            className={`lg:flex-1 flex max-lg:flex-col max-lg:pl-16 max-sm:pl-10 max-lg:bg-black max-lg:py-4 absolute lg:z-auto z-[-1] lg:static lg:items-center left-0 w-full gap-4 transition-all duration-500 ease-in ${
              menuOpen ? "top-20 opacity-100" : "top-[-490px]"
            } lg:opacity-100 opacity-0`}
          >
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-gray hover:text-red-600
                                  fonts-montserrat leading-normal text-lg max-lg:text-white-400 hover:no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex lg:flex-1 justify-end max-lg:pr-4 items-center gap-6 text-slate-gray">
            <i
              className="bx bx-search bx-sm hover:text-coral-red cursor-pointer"
              onClick={toggleSearch}
            ></i>
            <UserSection
              accessToken={accessToken}
              userName={userName}
              navigate={navigate}
              logout={logout}
            />
            <PopoverButton
              iconClass="bx bx-cart bx-sm hover:text-coral-red cursor-pointer"
              popoverContent={() => (
                <NotificationPopover
                  title="Shopping Cart"
                  content="You have no items in your cart."
                  button={
                    <button onClick={() => navigate("/products")}>
                      PRODUCTS
                    </button>
                  }
                />
              )}
            />
            <i className=""></i>
          </div>
        </nav>
      ) : (
        <div className="flex items-center max-container">
          <h1
            className="font-bold font-palanquin cursor-pointer text-3xl lg:pr-8 text-black"
            onClick={() => navigate("/")}
          >
            Furte
          </h1>
          <div className="flex items-center gap-4 pt-2">
            <i className="bx bx-search bx-sm"></i>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="border-b hover:border-b-slate-gray px-2 py-1 h-10 text-lg"
              style={{ width: "80vw" }}
            />
            <i
              className="bx bx-x bx-md hover:text-coral-red cursor-pointer"
              onClick={toggleSearch}
            ></i>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav