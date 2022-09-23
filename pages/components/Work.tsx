import Link from "next/link";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-300">
            Work
          </p>
          <p className="py-6">
            Check Out Some Of My Recent Work(First 3 are Web3, Other 3 are Web2
            Projects)
          </p>
        </div>
        

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-ljcrypto group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-sm whitespace-nowrap font-bold text-white tracking-wider">
                Buy Chris Coffee dApp
              </span>
              <div className="pt-8 text-center">
                <Link href="https://buy-chris-coffee-dapp.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/buy-chris-coffee-dapp">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-defiExchange group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                Chris Defi-Exchange
              </span>
              <div className="pt-8 text-center">
                <Link href="https://defi-exchange-ekom.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/Defi-Exchange">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-randomWinner group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                Chris Initial Coin Offering dApp (ICO)
              </span>
              <div className="pt-8 text-center">
                <Link href="https://chris-ico.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/ICO">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-jobFiltering group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bit Finance
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ekomic.github.io/bit-finance/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/bit-finance">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-ipAddress group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EasyCoin
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ekomic.github.io/easycoin/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/easycoin">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-commentsSection group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                Movie App
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ekomic.github.io/movie-app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ekomic/movie-app">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
