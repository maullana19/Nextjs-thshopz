const Section3Home = () => {
  return (
    <section className="bg-[#e0e1dd]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="font-semibold text-3xl text-[#415a77]">
            Daftar Dengan Mudah Nikmati Belanja Mu
          </h1>
          <p className="leading-relaxed mt-4 text-gray-700">
            Daftar sekarang dan dapatkan kesempatan untuk berbelanja dengan
            mudah dan nyaman. Tunggu apa lagi? Ayo belanja sekarang dan nikmati
            penawaran terbaik hanya untukmu.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow">
          <h2 className="text-gray-900 text-lg font-semibold mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="Email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="Phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-[#0F6292] border-0 py-2 px-8 mt-5  rounded text-lg">
            Daftar
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Dengan Mendaftar Anda Setuju Dengan Syarat & Ketentuan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3Home;
