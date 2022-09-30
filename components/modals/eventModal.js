import { Modal, TextInput, Button, Group } from "@mantine/core";

import { DatePicker, TimeInput } from "@mantine/dates";

import { addEvent, updateEvent, deleteEvent } from "../../functions/events";
import { showNotification } from "@mantine/notifications";

const EventModal = ({
  isModalVisible,
  setIsModalVisible,
  onSubmit,
  getInputProps,
  errors,
  reset,
  values,
  refetch,
}) => {
  const handleSubmit = async (data) => {
    try {
      if (data._id && data._id !== "") {
        const res = await updateEvent(data._id, data);
        showNotification({
          title: "Success",
          message: `Event has been updated`,
          color: "green",
        });
      } else {
        const res = await addEvent(data);
        showNotification({
          title: "Success!",
          message: `Event ${res.title}  added`,
          color: "teal",
        });
      }

      setIsModalVisible(false);
      reset();
      refetch();
    } catch (err) {
      showNotification({
        title: "Error",
        message: err.message,
        color: "red",
      });
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
    reset();
  };
  const onDelete = async (id) => {
    const res = await deleteEvent(id);

    showNotification({
      title: "Success",
      message: `Event has been deleted`,
      color: "green",
    });
    reset();
    refetch();
    handleClose();
  };
  return (
    <>
      <Modal
        title="Add an Event"
        opened={isModalVisible}
        onClose={handleClose}
        closeOnClickOutside={false}
      >
        <form
          onSubmit={onSubmit((values) => {
            handleSubmit(values);
          })}
        >
          <TextInput
            withAsterisk
            label="Title"
            {...getInputProps("title")}
            clearable
          />
          <TextInput
            withAsterisk
            label="Description"
            {...getInputProps("description")}
          />
          <TimeInput
            label="Start"
            format="12"
            clearable
            {...getInputProps("start")}
          />
          <TimeInput
            label="End"
            format="12"
            clearable
            {...getInputProps("end")}
          />
          <DatePicker label=" Date" clearable {...getInputProps("date")} />
          {/* <Group mt="md">
            <label htmlFor="start">Start</label>
            <input type="datetime" {...getInputProps("start")} />
            <label htmlFor="end">End</label>
            <input type="time" {...getInputProps("end")} />
          </Group> */}

          <Group position="apart" mt="sm">
            <Button color="red" onClick={() => onDelete(values._id)}>
              Delete
            </Button>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default EventModal;
