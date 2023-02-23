import React from "react";

import { Container, Paper } from "@mantine/core";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Container size="xs" h="full">
      <Paper shadow="xl" p="md" radius="lg" h="screen">
        <Header />
        {children}
      </Paper>
    </Container>
  );
}

export default Layout;
