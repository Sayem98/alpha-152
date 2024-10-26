const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 p-4 flex flex-col gap-2">
        <h1 className="text-white font-bold text-xl">Alpha-152</h1>
        <p className="text-white text-start text-[14px]">
          Alpha-152 Token is a meme token designed solely for entertainment and
          has no ties to stocks, equities, or securities. Any similarities to
          traditional financial concepts are meant purely as satire and should
          not be interpreted seriously. Alpha-152 has no intrinsic value and
          does not promise any financial returns.
        </p>
        <p className="text-white text-end">
          {" "}
          © 2023 by $ALPHA-152. All rights reserved!
        </p>
      </footer>
    </div>
  );
};

export default Footer;
