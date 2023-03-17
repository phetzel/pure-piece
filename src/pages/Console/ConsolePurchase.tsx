import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import ConsolePurchaseList from "./ConsolePurchaseList";
import consoleStyles from "./styles/consoleStyles";

export type Props = {};

const ConsoleProduct = ({}: Props) => {
  const [purchaseTab, setPurchaseTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPurchaseTab(newValue);
  };

  const renderTabContent = () => {
    switch (purchaseTab) {
      case 0:
        return <ConsolePurchaseList />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <Box>
      <Box sx={consoleStyles.tabPicker}>
        <Tabs
          value={purchaseTab}
          onChange={handleChange}
          aria-label="Admin Purchase Tabs"
        >
          <Tab label="Purchase List" />
        </Tabs>
      </Box>

      <Box>{renderTabContent()}</Box>
    </Box>
  );
};

export default ConsoleProduct;
