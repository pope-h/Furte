import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import PopoverButton from "./popover/PopoverButton";
import NotificationPopover from "./popover/NotificationPopover";
import useStorePackage from "../store";
import UserSection from "./UserSection";

/**
 * Navigation component for the application.
 * Renders the navigation bar with menu, search, and user-related functionality.
 */
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const store = useStorePackage();
  const { accessToken, userName, logout, searchQuery, setSearchQuery } = store;

  const totalQuantity = store.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

   //console.log("User token:", accessToken);
   //console.log("User Name:", userName);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Handles the change event of the search input field.
   * Updates the search query state.
   * @param {Object} e - The event object.
   */
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  /**
   * Handles the search action.
   * Redirects to the products page with the search query.
   */
  const handleSearch = () => {
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  /**
   * Toggles the search state.
   * Opens or closes the search input field.
   */
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Filter the navigation links based on the window width
  const filteredNavLinks =
    screenWidth > 767
      ? navLinks.filter(
          (item) =>
            item.label !== "Dashboard" &&
            item.label !== "Cart" &&
            item.label !== "Sign In"
        )
      : navLinks;

  // Dynamically set the Sign In/Sign Out label based on user authentication
  // const signInOrOutLabel = accessToken ? "Sign Out" : "Sign In";

  /**
   * Handles the navigation to the specified path.
   * If the user is signed in, it triggers the sign-out action.
   * If the user is not signed in, it redirects to the sign-in page.
   * @param {string} path - The path to navigate to.
   */
  const handleSignInSignOut = (path) => {
    if (path === "/signin") {
      if (accessToken) {
        // User is signed in, trigger sign-out action
        logout();
      } else {
        // User is not signed in, redirect to the sign-in page
        navigate(path);
      }
    } else {
      // Regular navigation for other links
      navigate(path);
    }
    setMenuOpen(false); // Close the menu after navigation
  };

  /**
   * Handles the navigation to the specified path.
   * @param {string} path - The path to navigate to.
   */
  // const handleNavigation = (path) => {
  //   navigate(path);
  //   setMenuOpen(false); // Close the menu after navigation
  // };

  return (
    <header className="padding-x py-6 z-10 absolute top-0 w-full bg-white-400">
      {!searchOpen ? (
        <nav className="flex justify-between items-center max-container">
          <div
            className="hidden max-lg:block cursor-pointer pt-2 max-lg:pl-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} bx-md`}></i>
          </div>
          <h1
            className="font-bold max-md:font-semibold font-palanquin cursor-pointer text-3xl max-md:text-2xl lg:pr-8 text-black"
            onClick={() => navigate("/")}
          >
            <i className="bx bxl-firebase"></i>Furte
          </h1>
          <ul
            className={`lg:flex-1 flex max-lg:flex-col max-lg:pl-16 max-sm:pl-10 max-lg:bg-black max-lg:py-4 absolute lg:z-auto z-[-1] lg:static lg:items-center left-0 w-full gap-4 transition-all duration-500 ease-in ${
              menuOpen ? "top-20 opacity-100" : "top-[-490px]"
            } lg:opacity-100 opacity-0`}
          >
            {filteredNavLinks.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => handleSignInSignOut(item.href)}
                  className="text-slate-gray hover:text-red-600
                                  fonts-montserrat leading-normal text-lg max-lg:text-white-400 hover:no-underline hover:cursor-pointer"
                >
                  {item.label === "Sign In" && accessToken
                    ? "Sign Out"
                    : item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex lg:flex-1 justify-end max-lg:pr-4 items-center gap-6 text-slate-gray">
            <i
              className="bx bx-search bx-sm hover:text-coral-red cursor-pointer"
              onClick={toggleSearch}
            ></i>
            <div className="max-md:hidden flex gap-6 items-center">
              <UserSection
                accessToken={accessToken}
                userName={userName}
                navigate={navigate}
                logout={logout}
              />
              <div className="relative">
                <PopoverButton
                  iconClass="bx bx-cart bx-sm hover:text-coral-red cursor-pointer"
                  popoverContent={() => (
                    <NotificationPopover
                      title={`${
                        !store.cart || store.cart.length === 0
                          ? "Shopping Cart"
                          : `${totalQuantity} item${
                              totalQuantity > 1 ? "s" : ""
                            } in your shopping cart.`
                      }`}
                      content={`${
                        !store.cart || store.cart.length === 0
                          ? "You have no item in your cart."
                          : ""
                      }`}
                      button={
                        <button onClick={() => navigate("/products")}>
                          PRODUCTS
                        </button>
                      }
                    />
                  )}
                />
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 text-center font-medium">
                    {totalQuantity}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="flex items-center gap-2 w-full">
          <h1
            className="font-bold font-palanquin cursor-pointer text-3xl max-md:text-2xl lg:pr-8 text-black"
            onClick={() => navigate("/")}
          >
            Furte
          </h1>
          <div className="flex flex-1 items-center gap-4 pt-2">
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="border-b hover:border-b-slate-gray px-2 py-1 h-10 text-lg w-full"
              // style={{ width: "80vw" }}
            />
            <i
              className="bx bx-search bx-sm hover:text-coral-red cursor-pointer"
              onClick={handleSearch}
            ></i>
            <i
              className="bx bx-x bx-md hover:text-coral-red cursor-pointer"
              onClick={toggleSearch}
            ></i>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
