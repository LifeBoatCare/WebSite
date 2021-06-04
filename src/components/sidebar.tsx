import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  setIsSideNavOpen: Function;
  setIsSideNavClosing: Function;
}

interface NavProps {
  to: string;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  setIsSideNavOpen,
  setIsSideNavClosing,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setIsOpen(true);
    }, 0);

    return () => document.body.removeAttribute("style");
  }, []);

  const closeSideBar = () => {
    setIsOpen(false);
    setIsSideNavClosing(true);
    setTimeout(() => {
      setIsSideNavOpen(false);
    }, 500);
  };

  const NavLink: React.FC<NavProps> = ({ to, children }) => {
    return (
      <Link to={to}>
        <li className="py-3 px-5 text-royal-blue">{children}</li>
      </Link>
    );
  };

  return (
    <div className="block sm:hidden fixed h-full w-full top-0 left-0 z-30">
      <div
        className={`absolute inset-0 bg-black transition-colors duration-500 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        } `}
        onClick={() => closeSideBar()}
      ></div>
      <div
        className="absolute left-0 top-0 bottom-0 bg-skye-blue transition duration-500"
        style={
          isOpen
            ? { transform: `translateX(0px)` }
            : { transform: `translateX(-265px)` }
        }
      >
        <div className="p-8">
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
                <h1 className="text-xl sm:text-2xl pl-1">LIFE BOAT</h1>
                <h4 className="text-royal-blue text-xs sm:text-sm">
                  Rediscover Yourself
                </h4>
              </div>
            </div>
          </Link>
        </div>

        <hr className="bg-royal-blue" />

        <nav>
          <ul>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/">FEATURES</NavLink>
            <NavLink to="/">HOW LIFEBOAT WORKS</NavLink>
            <NavLink to="/">TESTIMONIALS</NavLink>
            <NavLink to="/">FAQs</NavLink>
            <NavLink to="/">CONTACT</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
