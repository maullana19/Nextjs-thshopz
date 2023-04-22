import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import data from "@/pages/api/products/data.json";

const Navbars = () => {
  const routelinks = useRouter();
  const [isSticky, setSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // SEARCH BAR
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter produk berdasarkan nama yang sesuai dengan search term
    const filteredProducts = data.filter((producttz) =>
      producttz.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  // CART Handle
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  // stickyHandle
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  // For ToogleSidebar
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="bg-[#3A98B9]  ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
            </svg>

            <span className="self-center ml-2   font-semibold px-1 py-1 text-white">
              PROMO RAMADHAN
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-xs  text-sky-200 hover:underline"
            >
              (+62) 896-3750-xxxx
            </a>
            <Link
              href={"/login"}
              className=" font-semibold text-white underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      {/* NAVBAR 2 */}
      <nav
        className={` ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full px-4 lg:px-5 py-2.5 shadow bg-[#3A98B9] z-20"
            : " px-4 lg:px-5 py-2.5 shadow bg-[#3A98B9]"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center">
          {/* Sidebar Toogle */}
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              onClick={handleDrawerOpen}
              className="hidden p-2 mr-3 rounded cursor-pointer lg:inline  "
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400  "
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            {/* Menu CART */}
            {isDrawerOpen && (
              <div
                className="fixed z-40 inset-0 bg-black bg-opacity-50"
                onClick={handleDrawerClose}
              />
            )}
            <div
              className={`fixed z-50 inset-y-0 left-0 w-64 bg-gray-100 h-full overflow-y-auto ease-in-out transition-all duration-300 transform ${
                isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">ThShopz</h2>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                  <ul className="space-y-2 font-medium">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                        <span className="ml-3">Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* LOGO */}
            <a href="#" className="flex mr-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                ThShopz
              </span>
            </a>
            {/* SEARCH */}
            <form action="#" method="GET" className="hidden lg:block lg:pl-4">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-gray-50 border-none text-gray-900 sm:text-sm rounded-lg shadow block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
                {searchResults.length > 0 && (
                  <div className="z-30 absolute bg-white w-full rounded-lg">
                    {searchResults.map((productx) => (
                      <div
                        key={productx.id}
                        className="py-1 px-4 border-gray-300"
                      >
                        <Link href={`/product/${productx.id}`}>
                          {productx.product}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="items-center order-2 ">
            {/* Link Breadcrumb */}
            <div className="flex" aria-label="Breadcrumb ">
              <ol className="inline-flex items-center space-x-1 md:space-x-5">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className={`${
                      routelinks.pathname === "/"
                        ? "inline-flex items-center text-sm font-bold text-white"
                        : "text-gray-300 inline-flex items-center "
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="inline-flex items-center ">
                  <Link
                    href="/product"
                    className={`${
                      routelinks.pathname === "/product"
                        ? "inline-flex items-center text-sm font-bold text-white"
                        : "text-gray-300 inline-flex items-center"
                    }`}
                  >
                    Product
                  </Link>
                </li>
                <li className="inline-flex items-center ">
                  <Link
                    href="/order"
                    className={`${
                      routelinks.pathname === "/order"
                        ? "inline-flex items-center text-sm font-bold text-white"
                        : "text-gray-300 inline-flex items-center "
                    }`}
                  >
                    Order
                  </Link>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-100 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400  "
            >
              <span className="sr-only">Search</span>
              {/* Search icon */}
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* CartShop */}
            <Link
              href={"/cart"}
              className={`${
                routelinks.pathname === "/cart"
                  ? "p-2 mr-1 flex rounded-lg text-white bg-red-500"
                  : "p-2 mr-1 flex rounded-lg text-white"
              }`}
            >
              <span className="sr-only">View cart</span>
              {/* cart icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <span className="text-xs text-gray-200 ">{getItemsCount()}</span>
            </Link>

            {/* Dropdown User */}

            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src="/img/user-picture.jpg"
                alt="user-photo"
                width={100}
                height={100}
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Username
                </span>
                <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                  email
                </span>
              </div>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 "
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 "
                  >
                    Account settings
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 "
                  >
                    <svg
                      className="mr-2 w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    My likes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 "
                  >
                    <svg
                      className="mr-2 w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>{" "}
                    Collections
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 font-light text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
