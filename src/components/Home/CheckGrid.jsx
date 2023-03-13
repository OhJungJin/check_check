import { Center, Paper, Grid, Button } from "@mantine/core";
import React from "react";

function CheckGrid() {
  const arr = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  return (
    <Paper shadow="xl" p="md" radius="lg" mt="5rem">
      <Grid justify="center" align="center" grow gutter="sm" ta="center">
        {arr.map((item) => (
          <Grid.Col span={3} w="auto" h="auto" m={2} c="white">
            <Center>
              <Paper
                radius="md"
                style={{
                  "outline-style": "solid",
                  "outline-width": "2px",
                  "outline-color": "#3b82f6;",
                }}
                w="80px"
                h="80px"
              >
                <Center h={"100%"}>{item}</Center>
              </Paper>
            </Center>
          </Grid.Col>
        ))}
        <Grid.Col span={12} mt={10}>
          <Center>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              radius="xl"
            >
              출석체크
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default CheckGrid;
