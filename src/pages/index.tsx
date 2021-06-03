import * as React from "react";
import Description from "../components/description";
import Features from "../components/features";
import Testimonials from "../components/testimonials";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Hello" />
    {/* <div className="h-screen"></div> */}
    <Features />
    <Description />
    <Testimonials />
  </Layout>
);

export default IndexPage;
