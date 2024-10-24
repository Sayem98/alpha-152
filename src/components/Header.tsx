import { NavLink } from "./NavLink";

export default function Header() {
  return (
    <div className="bg-black w-full">
      <div className=" flex flex-col max-w-[2000px] mx-auto md:px-0 ">
        <div className="flex w-full flex-col md:flex-row">
          <img
            src="/assets/images/Logo.png"
            alt="logo"
            className="w-32  mx-auto"
          />
          <div className="flex justify-center items-center gap-12  w-full">
            <NavLink
              image="/assets/images/twitter-white.png"
              url="https://x.com/alphaonefivetwo"
            />
            {/* telegram */}
            <NavLink
              image="/assets/images/telegram-white.png"
              url="https://t/.co/tVNCRl4mGK"
            />
            {/* discord */}
            <NavLink
              image="/assets/images/discord-white.png"
              url="https://discord.com"
            />
            {/* decscreener */}
            <NavLink
              image="/assets/images/dex.png"
              url="https://dexscreener.com/solana/alhnhedzgh7vt6ezwsdfybbvy3j634xcvxcfqwexerf5"
            />
          </div>
        </div>
        <div className="bg-[#4cc3a9] h-0.5 w-full mt-4"></div>
        {/* navink */}

        <nav className="flex justify-center items-center text-sm md:text-2xl gap-2 md:gap-20 py-3 font-bold uppercase text-[#4cc3a9]">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Roadmap
          </a>
          <a href="#" className="">
            Team
          </a>
          <a href="#" className="">
            FAQ
          </a>
          <a href="#" className="">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
