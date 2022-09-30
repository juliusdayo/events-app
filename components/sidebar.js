import { Navbar } from "@mantine/core";

const Sidebar = () => {
  return (
    <Navbar
      height={600}
      p="xs"
      width={{
        sm: 200,
        lg: 300,
        base: 50,
      }}
    >
      <Navbar.Section>Home</Navbar.Section>
      <Navbar.Section>Users</Navbar.Section>
      <Navbar.Section>Events</Navbar.Section>
    </Navbar>
  );
};
export default Sidebar;
