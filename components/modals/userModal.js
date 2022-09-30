import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import { addUser } from "../../functions/user";
const UserModal = ({ isModalVisible, setIsModalVisible, refetch }) => {
  const { onSubmit, getInputProps, errors, reset } = useForm({
    initialValues: {
      username: "",
      email: "",
    },
  });

  const handleClose = () => {
    setIsModalVisible(false);
    reset();
  };
  const handleSubmit = async (values) => {
    try {
      const res = await addUser(values);

      showNotification({
        title: "Success",
        message: `User has been added`,
        color: "green",
      });
      handleClose();
      refetch();
    } catch (err) {
      showNotification({
        title: "Error",
        message: err.message,
        color: "red",
      });
      console.log(err);
    }
  };

  return (
    <Modal
      title="Add User"
      opened={isModalVisible}
      onClose={() => handleClose()}
    >
      <form
        onSubmit={onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <TextInput label="User Name" {...getInputProps("username")} />
        <TextInput label="Email" {...getInputProps("email")} />
        <Group mt="md" position="right">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Modal>
  );
};

export default UserModal;
