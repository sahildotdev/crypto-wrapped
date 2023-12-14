import React from "react";
import Image from "next/image";

export const LandingDataSection = () => {
  return (
    <div className="mx-auto py-32 flex flex-col sm:py-48 lg:py-56">
      {/*data-1*/}
      <div className="pb-20 flex flex-col justify-center items-center">
        <div className="text-center pb-5 text-green-100 text-[82px] font-normal font-tiempos leading-[94.30px] tracking-widest">
          Total{" "}
          <span className="text-green-400 text-[82px] font-normal font-tickerbit leading-[94.30px] tracking-widest">
            # Transactions
          </span>
        </div>

        <div className="flex text-center text-white text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
          <p>
            In 2023, you initiated
            <span className="text-green-300 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
              438
            </span>
            transactions across various chains <br /> like{" "}
            <span className="text-neutral-400 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
              Ethereum
            </span>
            ,
            <span className="text-red-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
              Optimism
            </span>
            ,
            <span className="text-fuchsia-500 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
              Polygon
            </span>
            ,
            <span className="text-blue-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
              Zora
            </span>
            , etc. With this
            <br /> number, you soaring among the{" "}
            <span className="text-green-400 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
              top 25%
            </span>
            of crypto <br /> participants. Keep exploring & discover new
            possibilities!
          </p>
        </div>
      </div>

      {/*data-2*/}
      <div className="pb-20  flex flex-col justify-center items-center">
        <Image
          className="pb-8"
          src="/Images/gas-icon.svg"
          width={120}
          height={120}
          alt="img"
        />
        <div className="flex flex-col tracking-widest justify-center items-center">
          <div className="text-center text-green-100 text-[82px] font-normal font-tiempos leading-[94.30px] pb-5">
            Total{" "}
            <span className="text-green-400 text-[82px] font-normal font-tickerbit leading-[94.30px]">
              $ Gas Spent
            </span>
          </div>

          <div className="flex  text-center text-white text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
            <p>
              In 2023, you Spent{" "}
              <span className="text-green-300 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                $4300
              </span>
              on Gas across various chains like
              <br />
              <span className="text-neutral-400 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                Ethereum
              </span>
              ,
              <span className="text-red-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                Optimism
              </span>
              ,
              <span className="text-fuchsia-500 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                Polygon
              </span>
              ,
              <span className="text-blue-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                Zora
              </span>
              , etc. To put in <br /> perspective, it’s like splurging on{" "}
              <span className="text-green-400 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                1 Rolex Submarines
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      {/*data-3*/}
      <div className="pb-20  flex flex-col justify-center items-center">
        <Image
          className="pb-8"
          src="/Images/NFTicon.svg"
          width={120}
          height={120}
          alt="img"
        />
        <div className="flex flex-col tracking-widest justify-center items-center">
          <div className="text-center text-green-100 text-[82px] font-normal font-tiempos leading-[94.30px] pb-5">
            Total{" "}
            <span className="text-green-400 text-[82px] font-normal font-tickerbit leading-[94.30px]">
              NFTs
            </span>
          </div>

          <div className="flex  text-center text-white text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
            <p>
              <div className="w-[959px] text-center">
                In{" "}
                <span className="text-green-400 text-[32px] font-normal font-tickerbit leading-[41.60px] tracking-widest">
                  2023
                </span>
                , you collected a total of{" "}
                <span className="text-green-400 text-[34px] font-normal font-tickerbit leading-[44.20px] tracking-widest">
                  213 NFTs
                </span>
                across various
                <br /> chains like{" "}
                <span className="text-neutral-400 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Ethereum
                </span>
                ,
                <span className="text-red-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Optimism
                </span>
                ,
                <span className="text-fuchsia-500 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Polygon
                </span>
                ,
                <span className="text-blue-600 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Zora
                </span>
                ,
                <span className="text-cyan-400 text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  Polygon
                </span>
                <span className="text-white text-[32px] font-light font-tiempos leading-[41.60px] tracking-widest">
                  {" "}
                  etc.{" "}
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
