import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";

import { adminLoggedOut } from "../../redux/slices/adminSlice";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import ConsoleEmail from "./ConsoleEmail";

interface Props {}

const Console = ({}: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 1:
        return <ConsoleEmail />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <GridWrapper>
      <Container component="main" maxWidth="lg">
        <Button onClick={() => dispatch(adminLoggedOut(null))}>Log out</Button>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="Admin Console Tabs"
            >
              <Tab label="Products" />
              <Tab label="Email" />
            </Tabs>
          </Box>
          <Box>{renderTabContent()}</Box>
        </Box>
      </Container>
    </GridWrapper>
  );
};

export default Console;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
