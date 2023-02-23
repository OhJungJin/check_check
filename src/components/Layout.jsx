import React from "react";

import { Container, Paper } from "@mantine/core";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Container size="xs" h="auto" mih="100vh">
      <Paper shadow="xl" p="md" radius="lg" mih="100vh">
        <Header />
        {children}
      </Paper>
    </Container>
  );
}

export default Layout;
