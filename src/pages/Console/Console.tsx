import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Container, Fab, Tab, Tabs, Typography } from "@mui/material";

import useAppNavigation from "../../hooks/useAppNavigation";
import { handleLogout } from "../../services/userServices";
import { adminLoggedOut } from "../../redux/slices/adminSlice";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import ConsoleEmail from "./ConsoleEmail";
import ConsoleProduct from "./ConsoleProduct";
import ConsolePurchase from "./ConsolePurchase";
import consoleStyles from "./styles/consoleStyles";

interface Props {}

const Console = ({}: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const dispatch = useDispatch();
  const appNavigate = useAppNavigation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleAdminLogout = () => {
    handleLogout().then((res) => {
      dispatch(adminLoggedOut(null));
      appNavigate("Admin");
    });
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <ConsoleProduct />;
      case 1:
        return <ConsoleEmail />;
      case 2:
        return <ConsolePurchase />;
      default:
        return <Typography>Select Tab</Typography>;
    }
  };

  return (
    <PageWrapper>
      <Container component="main" maxWidth="lg">
        <Fab
          variant="extended"
          onClick={handleAdminLogout}
          sx={consoleStyles.logoutButton}
          size="small"
        >
          Log Out
        </Fab>

        <Box sx={{ width: "100%" }}>
          <Box sx={consoleStyles.tabPicker}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="Admin Console Tabs"
            >
              <Tab label="Products" />
              <Tab label="Emails" />
              <Tab label="Purchases" />
            </Tabs>
          </Box>
          <Box>{renderTabContent()}</Box>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default Console;
