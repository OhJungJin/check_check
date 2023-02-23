import { useState } from "react";
import { Calendar } from "@mantine/dates";
import { Indicator, Paper, Center } from "@mantine/core";

function CheckCalendar() {
  const [value, setValue] = useState(null);

  return (
    <Paper shadow="xl" p="md" radius="lg" mt="1rem">
      <Center>
        <Calendar
          value={value}
          onChange={setValue}
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator size={6} color="red" offset={8} disabled={day !== 18}>
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
      </Center>
    </Paper>
  );
}

export default CheckCalendar;
