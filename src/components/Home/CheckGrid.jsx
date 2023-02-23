import { Paper, Grid } from "@mantine/core";
import React from "react";

function CheckGrid() {
  return (
    <Paper shadow="xl" p="md" radius="lg">
      <Grid justify="center" align="center" grow gutter="sm">
        <Grid.Col span={4} w={1100} h={150} bg="blue">
          <div w={100}>월요일</div>
        </Grid.Col>
        <Grid.Col span={4} bg="blue">
          화요일
        </Grid.Col>
        <Grid.Col span={4}>수요일</Grid.Col>
        <Grid.Col span={4}>목요일</Grid.Col>
        <Grid.Col span={4}>금요일</Grid.Col>
        <Grid.Col span={4}>토요일</Grid.Col>
      </Grid>
    </Paper>
  );
}

export default CheckGrid;
