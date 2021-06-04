import * as React from "react";

import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-light-blue">
      <Header />
      <main className="pt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
