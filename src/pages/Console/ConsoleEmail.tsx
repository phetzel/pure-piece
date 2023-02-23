import React, { useState } from "react";
import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";

import ConsoleEmailSubscriptions from "./ConsoleEmailSubscriptions";

export type Props = {};

const ConsoleEmail = ({}: Props) => {
  const [consoleTab, setConsoleTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setConsoleTab(newValue);
  };

  const renderTabContent = () => {
    switch (consoleTab) {
      case 1:
        return <ConsoleEmailSubscriptions />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={consoleTab}
          onChange={handleChange}
          aria-label="Admin Console Tabs"
        >
          <Tab label="Send Newsletter" />
          <Tab label="Subscriptions" />
        </Tabs>
      </Box>

      <Box>{renderTabContent()}</Box>
    </Box>
  );
};

export default ConsoleEmail;
