import React from "react";

interface LayoutProps {
  image: string;
  url: string;
}

export const NavLink: React.FC<LayoutProps> = ({ image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-10 h-15 rounded-full  text-black"
    >
      <img src={image} alt="twitter" />
    </a>
  );
};
