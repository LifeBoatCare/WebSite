import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Sidebar from "./sidebar";
const MenuBtn = require("../images/menu.svg");

interface NavProps {
  to: string;
  children: React.ReactNode;
}

const Header: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [isSideNavClosing, setIsSideNavClosing] = useState<boolean>(true);

  const NavLink: React.FC<NavProps> = ({ to, children }) => {
    return (
      <Link to={to}>
        <li className="py-3 px-1 md:px-7 lg:px-12">{children}</li>
      </Link>
    );
  };

  return (
    <>
      <header className="flex relative justify-center sm:justify-between items-center bg-light-blue p-4">
        <button
          className="MenuBtn block sm:hidden absolute focus:outline-none"
          style={{ left: "5%" }}
          onClick={() => {
            setIsSideNavOpen(true);
            setIsSideNavClosing(false);
          }}
        >
          <MenuBtn />
        </button>
        <Link
          to="/"
          className="transition duration-500"
          style={
            isSideNavClosing
              ? { transform: `translateX(0px)` }
              : { transform: `translateX(-300px)` }
          }
        >
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
              <h1 className="text-xl sm:text-2xl pl-1">LIFE BOAT</h1>
              <h4 className="text-royal-blue text-xs sm:text-sm">
                Rediscover Yourself
              </h4>
            </div>
          </div>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/">FEATURES</NavLink>
            <NavLink to="/">THERAPISTS</NavLink>
            <NavLink to="/">FAQs</NavLink>
          </ul>
        </nav>
      </header>
      {isSideNavOpen ? (
        <Sidebar
          setIsSideNavOpen={setIsSideNavOpen}
          setIsSideNavClosing={setIsSideNavClosing}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
