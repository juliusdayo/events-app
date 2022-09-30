import { useState } from "react";
import { Button, Table } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";
import { useQuery } from "react-query";

import { getUsers } from "../../functions/user";

import UserModal from "../modals/userModal";
const UsersComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery("users", async () => await getUsers());

  const rows = data.map((user, i) => {
    return (
      <tr key={user.username}>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  const modalProps = {
    isModalVisible,
    setIsModalVisible,
    refetch,
  };
  return (
    <>
      <h1>Users</h1>
      <Button onClick={() => setIsModalVisible(true)}>
        <IconUserPlus /> Add User
      </Button>
      <Table horizontalSpacing="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <UserModal {...modalProps} />
    </>
  );
};

export default UsersComponent;
