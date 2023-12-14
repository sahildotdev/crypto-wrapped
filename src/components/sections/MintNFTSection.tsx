import React from "react";
import Image from "next/image";

function MintNFTSection() {
  return (
    <section className="w-[90%] mx-auto">
      <div className="pb-8">
        <h1 className="text-5xl font-normal font-tiempos text-[#FFFFFF]">
          Customise <span className=" font-tickerbit text-[#7AF274]">#NFT</span>
        </h1>

        <p className="pt-2 text-base font-light font-tiempos text-[#FFFFFF]">
          Choose and customise the way you want your NFT to look like!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-[#14060B] p-10">
        <div className="w-[50%]">
          <div>
            <div className="text-green-400 text-2xl font-medium font-tiempos">
              NFT Layout
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-base font-normal font-tiempos text-[#FFFFFF]">
                  Horizontal
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-base font-normal font-tiempos text-[#FFFFFF]">
                  Vertical
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="text-green-400 text-2xl font-medium font-tiempos">
              Theme
            </div>
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        </div>
        <div className="w-[50%] ">
          <div className="grid grid-rows-2 gap-1 rounded-3xl border border-white border-opacity-25 bg-gradient-to-r from-neutral-700 to-black rounded-3xl  shadow-lg ">
            <div className="text-center ">
              <span className="text-white text-[10px] font-normal font-tiempos leading-[13px] tracking-widest">
                Crypto
              </span>
              <span className="text-white text-[10px] font-normal italic font-tickerbit leading-[13px] tracking-widest">
                Wrapped
              </span>

              <span className="text-white text-[10px] font-normal font-tiempos leading-[13px] tracking-widest">
                2023
              </span>
            </div>

            <div className="rounded-2xl bg-opacity-5 bg-gradient-to-r p-0.5 from-[#FFFFFF] via-[#00000000] to-[#77F178]">
              <div className="flex h-full w-full rounded-2xl items-center justify-center bg-gradient-to-r from-neutral-700 to-black p-10">
                <Image
                  className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
                  src="/Images/ENSImg.png"
                  alt="Woman's Face"
                  width={120}
                  height={124}
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-3xl font-normal font-tickerbit text-[#7AF274]">
                      SKAYAZ.ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center ">
              <span className="text-white text-[10px] font-normal font-tiempos leading-[13px] tracking-widest">
                Crypto
              </span>
              <span className="text-white text-[10px] font-normal italic font-tickerbit leading-[13px] tracking-widest">
                Wrapped
              </span>

              <span className="text-white text-[10px] font-normal font-tiempos leading-[13px] tracking-widest">
                2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MintNFTSection;
