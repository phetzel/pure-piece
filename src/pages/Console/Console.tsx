import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  Fab,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import { adminLoggedOut } from "../../redux/slices/adminSlice";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import ConsoleEmail from "./ConsoleEmail";
import ConsoleProduct from "./ConsoleProduct";

interface Props {}

const Console = ({}: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <ConsoleProduct />;
      case 1:
        return <ConsoleEmail />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <PageWrapper>
      <Container component="main" maxWidth="lg">
        <Fab
          variant="extended"
          // color="secondary"
          onClick={() => dispatch(adminLoggedOut(null))}
          sx={{ position: "absolute", right: "50px" }}
          size="small"
        >
          Log Out
        </Fab>

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
    </PageWrapper>
  );
};

export default Console;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
