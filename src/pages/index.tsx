import * as React from "react";
import Description from "../components/description";
import Features from "../components/features";
import Testimonials from "../components/testimonials";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Home from "../components/home";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Hello" />
    <Home />
    <Features />
    <Description />
    <Testimonials />
  </Layout>
);

export default IndexPage;
