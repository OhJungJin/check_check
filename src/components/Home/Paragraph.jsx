import { Paper, Blockquote } from "@mantine/core";
import React from "react";

function Paragraph() {
  return (
    <Paper shadow="xl" p="md" radius="lg" mt="1rem" h="auto">
      <Blockquote cite="–Forrest Gump">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquid.
        Suscipit placeat modi quaerat dolor fugiat! Minus nulla doloribus iusto, veniam,
        necessitatibus debitis suscipit quam reprehenderit cumque, ex incidunt porro.s
      </Blockquote>
    </Paper>
  );
}

export default Paragraph;
