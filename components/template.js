import { AppShell, Header, Navbar } from "@mantine/core";

import Sidebar from "./sidebar";

const Template = ({ children }) => {
  return (
    <AppShell
      header={<Header title="Mantine" height={60} p="xs" />}
      navbar={<Sidebar />}
    >
      {children}
    </AppShell>
  );
};

export default Template;
