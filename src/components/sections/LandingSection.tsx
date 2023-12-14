import React from "react";
import Image from "next/image";
import { LandingDataSection } from "../LandingDataSection";

function LandingSection() {
  return (
    <div className="mx-auto py-32">
      <div className="flex flex-col  justify-center items-center">
        <Image
          className="pb-5"
          src="/Images/Rocket.png"
          width={106.67}
          height={40}
          alt="img"
        />

        <div className="text-center">
          <h1 className="text-6xl font-tiempos text-[#FFFFFF] ">
            Let’s dive into your
          </h1>

          <h1 className="mt-2 text-[82px] inline font-tickerbit text-[#7AF274] flex justify-center items-baseline">
            2023 Crypt
            <span className="pr-2">
              <Image src="/Images/OOO.png" width={52} height={52} alt="img" />
            </span>{" "}
            Journey
          </h1>

          <p className="font-tiempos text-[16px] font-light leading-[20.8px] text-[#fff] tracking-2px relative text-center">
            2023 was a
            <span className="font-tickerbit text-[16px] font-normal leading-[20.8px] text-[#fff] tracking-2px relative text-center">
              big year
            </span>
            ! Cheers for staying
            <span className="font-tickerbit text-[16px] font-normal leading-[20.8px] text-[#fff] tracking-2px relative text-center">
              persistent
            </span>
            during the 2023 crypto downturn! <br />
            Despite challenges, your continuous efforts in building are truly
            commendable. <br />
            Now, brace yourself for a special
            <span className="font-tickerbit text-[16px] font-normal leading-[20.8px] text-[#fff] tracking-2px relative text-center">
              CryptoWrapped NFT
            </span>
            — a timeless reward that awaits <br />
            at the end of your retro journey!
          </p>
        </div>
        <div>
          <LandingDataSection />
          <div className="flex text-center text-white text-3xl font-light font-tiempos leading-10 tracking-widest">
            <p>
              In total you spent{" "}
              <span className="text-green-400 text-3xl font-normal font-tickerbit leading-10 tracking-widest">
                $999
              </span>{" "}
              on NFTs across all chains &{" "}
              <span className="text-yellow-500 text-3xl font-normal font-tickerbit leading-10 tracking-widest">
                $777
              </span>{" "}
              in <br />
              gas that you might have also got yourself some pizza, burgers,
              <br />
              coffee, etc. But you’re a crypto champ and believe in NFTs <br />
              more than just a digital image!
            </p>
          </div>
          <div className="pt-20  flex flex-col justify-center items-center">
            <Image
              className="pb-8"
              src="/Images/love.svg"
              width={120}
              height={120}
              alt="img"
            />
            <div className="flex flex-col tracking-widest justify-center items-center">
              <div className="text-center text-green-100 text-[82px] font-normal font-tiempos leading-[94.30px] pb-5">
                Top{" "}
                <span className="text-green-400 text-[82px] font-normal font-tickerbit leading-[94.30px]">
                  NFTs
                </span>
              </div>

              <div className="flex text-center ">
                <p className="text-white text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Your largest purchase was{" "}
                  <span className="text-green-300 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                    LilNouns
                  </span>{" "}
                  where you spent a <br /> whooping{" "}
                  <span className="text-green-300 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                    $1100.
                  </span>{" "}
                  You hold{" "}
                  <span className="text-green-300 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                    7
                  </span>{" "}
                  popular ranked NFTs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
