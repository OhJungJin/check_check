import React from "react";

import Layout from "../components/Layout";
import CheckGrid from "../components/Home/CheckGrid";
import Calendar from "../components/Home/Calendar";
import Paragraph from "../components/Home/Paragraph";
import Youtube from "../components/Home/Youtube";
import Header from "../components/Header";
import Rank from "./Rank";

function Home() {
  return (
    <Layout>
      <Header />
      <Rank />
      <CheckGrid />
      <Paragraph />
      <Youtube />
      <Calendar />
    </Layout>
  );
}

export default Home;
