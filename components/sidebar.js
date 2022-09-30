import { Navbar, UnstyledButton, SimpleGrid, Text, Group } from "@mantine/core";
import { IconCalendarEvent, IconHome, IconUsers } from "@tabler/icons";
import { useViewportSize } from "@mantine/hooks";
const Sidebar = () => {
  const { width } = useViewportSize();
  const sidebarData = [
    {
      title: "Home",
      icon: <IconHome />,
      path: "/",
    },
    {
      title: "Events",
      icon: <IconCalendarEvent />,
      link: "/events",
    },
    {
      title: "Users",
      icon: <IconUsers />,
      link: "/users",
    },
  ];
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
      {sidebarData.map((item) => {
        return (
          <Navbar.Section>
            <Group>
              <UnstyledButton
                key={item.title}
                component="a"
                href={item.link}
                color="gray"
                fullWidth
              >
                <Text size="md" color="black" align="start">
                  {item.icon}
                  {width > 768 && item.title}
                </Text>
              </UnstyledButton>
            </Group>
          </Navbar.Section>
        );
      })}
    </Navbar>
  );
};
export default Sidebar;
