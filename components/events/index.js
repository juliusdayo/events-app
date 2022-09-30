import { useState } from "react";
import { Button, Grid } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCalendarPlus } from "@tabler/icons";

import { useQuery } from "react-query";
import { useForm } from "@mantine/form";
import { getEvent, addEvent } from "../../functions/events";

import CalendarView from "./calendar";
import EventModal from "../modals/eventModal";
const Events = () => {
  const [isCalendar, setIsCalendar] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery("events", async () => await getEvent());

  const { onSubmit, getInputProps, errors, reset, setValues, values } = useForm(
    {
      initialValues: {
        title: "",
        description: "",
        start: new Date(),
        end: new Date(),
        date: new Date(),
        users: [],
      },
    }
  );

  const modalProps = {
    isModalVisible,
    setIsModalVisible,
    onSubmit,
    getInputProps,
    errors,
    reset,
    setValues,
    values,
  };

  return (
    <>
      <h1>Events</h1>
      <Button onClick={() => setIsModalVisible(true)}>
        <IconCalendarPlus /> Add an Event
      </Button>
      {isCalendar && <CalendarView {...modalProps} data={data} />}
      <EventModal {...modalProps} refetch={refetch} />
    </>
  );
};

export default Events;
