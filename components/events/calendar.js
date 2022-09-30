import { useState } from "react";
import { Calendar } from "@mantine/dates";
import { Indicator, Popover, Button, Text, Grid } from "@mantine/core";
import dayjs from "dayjs";
import { getEvent } from "../../functions/events";
const CalendarView = (props) => {
  const { setValues: setFormValues, setIsModalVisible, data } = props;

  const [value, setValue] = useState(new Date());

  const renderDay = (date) => {
    const day = date.getDate();
    const events =
      data &&
      data?.filter((event) => {
        return dayjs(event.date).isSame(dayjs(date), "day");
      });

    const openModal = (values) => {
      setIsModalVisible(true);
      setFormValues({
        ...values,
        date: new Date(values.date),
        start: new Date(values.start),
        end: new Date(values.end),
        users: values.users.map((user) => user._id),
      });
    };

    return (
      <Indicator
        disabled={events.length == 0}
        position="top-center"
        color="green"
      >
        <Popover width={250} position="top-end" withArrow shadow="md">
          <Popover.Target>
            <Text size="sm">{day}</Text>
          </Popover.Target>
          <Popover.Dropdown>
            {events.length != 0 ? (
              events.map((event) => {
                return (
                  <>
                    <Button size="xs" onClick={() => openModal(event)}>
                      <Text size="sm" color="black" align="start">
                        {event.title}
                        {" | "}
                        {dayjs(event.start).format("hh:mm A")}-
                        {dayjs(event.end).format("hh:mm A")}
                      </Text>
                    </Button>
                  </>
                );
              })
            ) : (
              <Text size="sm" color="black" align="start">
                No Events
              </Text>
            )}
          </Popover.Dropdown>
        </Popover>
      </Indicator>
    );
  };

  return (
    <Calendar
      firstDayOfWeek="sunday"
      value={value}
      onChange={setValue}
      fullWidth
      size="xl"
      styles={(theme) => ({
        cell: {
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
        },
        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
        weekday: { fontSize: theme.fontSizes.lg },
        weekdayCell: {
          fontSize: theme.fontSizes.xl,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
          }`,
          height: 70,
        },
      })}
      renderDay={renderDay}
    />
  );
};

export default CalendarView;
