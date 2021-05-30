import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface NavProps {
  to: string;
  children: React.ReactNode;
}

const Header: React.FC = () => {
  const NavLink: React.FC<NavProps> = ({ to, children }) => {
    return (
      <Link to={to}>
        <li className="py-3 px-1 md:px-7 lg:px-12">{children}</li>
      </Link>
    );
  };

  return (
    <header className="flex justify-between items-center bg-light-blue p-4">
      <Link to="/">
        <div className="flex">
          <StaticImage
            src="../images/icon.png"
            quality={100}
            placeholder="tracedSVG"
            formats={["auto", "webp", "avif"]}
            alt="logo"
            height={150}
            width={150}
            className="w-20 md:w-24"
          />
          <div className="p-2">
            <h1 className="text-2xl pl-1">LIFE BOAT</h1>
            <h4 className="text-royal-blue text-sm">Rediscover Yourself</h4>
          </div>
        </div>
      </Link>
      <nav>
        <ul className="flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">FEATURES</NavLink>
          <NavLink to="/">THERAPISTS</NavLink>
          <NavLink to="/">FAQs</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
