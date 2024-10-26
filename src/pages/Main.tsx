import { useEffect, useRef } from "react";

export const Main = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    if (videoRef2.current) {
      videoRef2.current.play();
    }
  }, [videoRef2]);

  return (
    <div className="w-full bg-black">
      <img src="/assets/images/banner-png.png" alt="main" className="w-full" />
      <div className="flex gap-5 flex-col">
        {/* video */}
        <div className="flex-4">
          <video
            ref={videoRef}
            className=" w-full"
            src="/assets/images/mainvideo2.mov"
            loop
            controls
            autoPlay
          ></video>
        </div>
        {/* story */}
        <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-10 text-[#4cc3a9]  px-5 md:px-1 ">
          <img
            src="/assets/images/lore.gif"
            alt="alpha gif"
            className="w-full md:w-[50%]"
          />
          <div className="md:w-[40%] flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Lore </h1>
            <p className="font-bold text-lg md:text-2xl">
              In Chinese numerology, 6900 reduces to 6 (smoothness, flow) and
              152 reduces to 8 (wealth, prosperity), suggesting a path from
              smooth beginnings leading to prosperity.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-5 flex-col md:flex-row">
        <div className="px-5 text-[#4cc3a9] flex flex-col md:flex-row">
          <img
            src="/assets/images/eye.gif"
            alt="alpha gif"
            className="mt-5 md:h-[800px]"
          />
          <div className="md:ml-20 py-5 flex flex-col gap-2 justify-center">
            <h1 className="text-4xl font-bold">Study 152 </h1>
            <p className="font-bold  mt-5 text-lg md:text-2xl md:w-[90%] ">
              Alpha-152 is the final stage of the Alpha series of human weapons,
              a group of hyperclones created from Kasumi's DNA by the evil
              genius Donovan. Having just been born, Alpha-152 is immaculate;
              she is a blank slate, and precisely because of that, the combat
              instincts that have been imprinted on her psyche are able to be
              activated mercilessly without exception.
            </p>
          </div>
        </div>
        <img src="/assets/images/trump.png" alt="main" className="w-full" />
      </div>
      <div className="flex mt-5 flex-col md:flex-row text-[#4cc3a9]">
        <img
          src="/assets/images/token-details.gif"
          alt="main"
          className="w-full"
        />
        <div className="px-5 py-1 flex flex-col justify-center items-center gap-1 md:gap-5">
          <h1 className="text-xl font-bold">CONTRACT ADDRESS</h1>
          <a
            className="text-sm md:text-xl font-bold"
            href="https://solscan.io/token/EvNBoWwZFF6pPpjTnNSzrurxkDfw1PGUmih1eAStpump"
          >
            EvNBoWwZFF6pPpjTnNSzrurxkDfw1PGUmih1eAStpump{" "}
          </a>
          <p className="font-bold  mt-5 text-lg md:text-2xl">Ticker: $ALPHA</p>
          <p className="font-bold  mt-5 text-lg md:text-2xl">
            Total supply: 1,000,000,000
          </p>
          <p className="font-bold  mt-5 text-lg md:text-2xl">
            Circulating supply: 969,800,000
          </p>
          <p className="font-bold  mt-5 text-lg md:text-2xl">
            Total burned: 15,200,000{" "}
          </p>
          <p className="font-bold  mt-5 text-lg md:text-2xl">
            Locked supply for 152 years: 25,000,000
          </p>
        </div>
        <img src="/assets/images/computer.gif" alt="main" className="w-full" />
      </div>
      <img src="/assets/images/filler.webp" alt="main" className="w-full" />
    </div>
  );
};
