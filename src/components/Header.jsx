import React from "react";
import { Text, MantineProvider } from "@mantine/core";

function Header() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Verdana, sans-serif",
        fontFamilyMonospace: "Monaco, Courier, monospace",
        headings: { fontFamily: "Greycliff CF, sans-serif" },
      }}
    >
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
        ta="center"
        fz="xl"
        fw={700}
        mt={40}
      >
        오정
        <Text component="span">님 안녕하세요</Text>
      </Text>
    </MantineProvider>
  );
}

export default Header;
