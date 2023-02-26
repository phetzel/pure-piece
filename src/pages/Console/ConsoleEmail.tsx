import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import ConsoelEmailForm from "./ConsoleEmailForm";
import ConsoleEmailSubscriptions from "./ConsoleEmailSubscriptions";

export type Props = {};

const ConsoleEmail = ({}: Props) => {
  const [emailTab, setEmailTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setEmailTab(newValue);
  };

  const renderTabContent = () => {
    switch (emailTab) {
      case 0:
        return <ConsoelEmailForm />;
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
          value={emailTab}
          onChange={handleChange}
          aria-label="Admin Console Tabs"
        >
          <Tab label="Send Newsletter" />
          <Tab label="Subscription List" />
        </Tabs>
      </Box>

      <Box>{renderTabContent()}</Box>
    </Box>
  );
};

export default ConsoleEmail;
