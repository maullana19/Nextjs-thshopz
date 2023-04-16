const Footers = () => {
  return (
    <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 "
        >
          Thshopz
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          This website was built and developed by me for your needs. if you like
          it please use it and give me a COFFEE
        </p>
        <div className="px-2 py-2">
          <p className="text-sm text-gray-500">What Im Use</p>
        </div>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              ReactJS
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Next JS
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              TailwindCss
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Flowbite
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href={"/"} className="hover:underline">
            Thshopz™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footers;
