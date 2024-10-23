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
      <img src="src/assets/banner-png.png" alt="main" className="w-full" />
      <div className="flex gap-5 flex-col md:flex-row">
        {/* video */}
        <div className="flex-4">
          <video
            ref={videoRef}
            className=""
            src="src/assets/mainvideo.mp4"
            muted
            loop
          ></video>
        </div>
        {/* story */}
        <div className="flex-1 flex flex-col justify-start items-center gap-4 text-[#4cc3a9]  px-5 md:px-0">
          <h1 className="text-4xl font-bold">Lore behind Alpha-152 </h1>
          <p className="font-bold text-lg md:text-2xl">
            Alpha-152 is the final stage of the Alpha series of hunan wepons, a
            group of hyperclones created from Kasumi's DNA by the evil genious
            Donovan. Having just been born, Alpha-152 is immaculate; she is a
            blake slate, and precisely because of that, the combat instincts
            that have been imprinted on her psyche are able to be activated
            mercilessly without exception.
          </p>
          <img
            src="src/assets/alpha-gif.gif"
            alt="alpha gif"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex mt-5 flex-col md:flex-row">
        <div className="px-5 text-[#4cc3a9]">
          <h1 className="text-4xl font-bold">
            Money and Career Meaning of Angel Number 152{" "}
          </h1>
          <p className="font-bold  mt-5 text-lg md:text-2xl">
            In terms of money and career, the angel number 152 indecates that
            you are on the brink of major breakthroughs and financial abundance.
            It is a message from the universe to stay focused on your goals,
            take risks, and trust your abilities to succeed. This number also
            signifies the importance of balance between work and personal life.
          </p>
          <img
            src="src/assets/trump-gif.gif"
            alt="alpha gif"
            className="w-full mt-5"
          />
        </div>
        <img src="src/assets/trump.png" alt="main" className="w-full" />
      </div>
    </div>
  );
};
