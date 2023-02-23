import { Paper, Grid, Button, Center } from "@mantine/core";
import React from "react";

function CheckGrid() {
  return (
    <Paper shadow="xl" p="md" radius="lg" mt="5rem">
      <Grid justify="center" align="center" grow gutter="sm" ta="center">
        <Grid.Col span={3} w="auto" h="auto" m={2} c="white">
          <Paper radius="xl" style={{ backgroundColor: "#f0f0f0" }} w="100%" h="100%">
            <div>월요일</div>
          </Paper>
        </Grid.Col>
        <Grid.Col span={3} bg="blue">
          화요일
        </Grid.Col>
        <Grid.Col span={3}>수요일</Grid.Col>
        <Grid.Col span={4}>목요일</Grid.Col>
        <Grid.Col span={4}>금요일</Grid.Col>
        <Grid.Col span={4}>토요일</Grid.Col>
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
