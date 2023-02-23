import React from "react";

import Layout from "../components/Layout";
import CheckGrid from "../components/Home/CheckGrid";
import Calendar from "../components/Home/Calendar";
import Paragraph from "../components/Home/Paragraph";

function Home() {
  return (
    <Layout>
      <CheckGrid />
      <Paragraph />
      <Calendar />
    </Layout>
  );
}

export default Home;
