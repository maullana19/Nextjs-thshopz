import Link from "next/link";
import Image from "next/image";

const HomeSection1 = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-5xl ">
          Promo Ramadhan{" "}
          <span className=" bg-[#F0A04B] text-white px-2">Big Sale </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Nikmati diskon spesial dan penawaran menarik di promo Ramadhan Sale
          untuk mempercantik momen suci bersama keluarga dan orang terkasih
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href={"/product"}
            className="inline-flex justify-center items-center  py-3 px-4 border border-black font-semibold text-center rounded hover:border-none hover:bg-[#E74646] hover:text-white"
          >
            Belanja Ramadhan
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
