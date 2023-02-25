import React, { useState } from "react";
import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";

import ConsoleProductForm from "./ConsoleProductForm";
import ConsoleProductList from "./ConsoleProductList";

export type Props = {};

const ConsoleProduct = ({}: Props) => {
  const [productTab, setProductTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProductTab(newValue);
  };

  const renderTabContent = () => {
    switch (productTab) {
      case 0:
        return <ConsoleProductList />;
      case 1:
        return <ConsoleProductForm />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={productTab}
          onChange={handleChange}
          aria-label="Admin Console Tabs"
        >
          <Tab label="Product List" />
          <Tab label="Add Product" />
        </Tabs>
      </Box>

      <Box>{renderTabContent()}</Box>
    </Box>
  );
};

export default ConsoleProduct;
