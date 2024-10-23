import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 p-4 flex flex-col gap-2">
        <h1 className="text-white font-bold text-3xl">Alpha-152</h1>
        <p className="text-white text-start">
          Alpha-152 Token is a meme token created for entertainment purposes
          only and has no association with any stocks, equities, or securities.
          Any resemblance or association between Alpha-152 and the “Stock
          Market” is purely coincidental and intended for satirical or humorous
          purposes. Alpha-152 token is a meme token with no intrinsic value or
          expectation of financial return. © 2023 by $SPX. All rights reserved!
          Contact: admin@Alpha-152.com
        </p>
        <p className="text-[#4cc3a9] text-end">Powered by Alpha-152</p>
      </footer>
    </div>
  );
};

export default Footer;
