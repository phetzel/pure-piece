import React, { useState } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

// constants
import dashboardStyles from "./styles/dashboardStyles";
// compomnent
import CommonIconButton from "../../components/common/CommonIconButton/CommonIconButton";
import ContactModal from "../../components/Modals/ContactModal/ContactModal";
import SubscribeModal from "../../components/Modals/SubscribeModal/SubscribeModal";

interface Props {}

const DashboardContact = ({}: Props) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] =
    useState<boolean>(false);

  return (
    <Container id="dashboardContact">
      {/* modals */}
      <ContactModal
        isOpen={isContactModalOpen ? true : false}
        handleClose={() => setIsContactModalOpen(false)}
      />
      <SubscribeModal
        isOpen={isSubscribeModalOpen ? true : false}
        handleClose={() => setIsSubscribeModalOpen(false)}
      />

      <Grid
        container
        spacing={1}
        bgcolor="black.main"
        sx={dashboardStyles.contactContainer}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "15px", textAlign: "center" }}
            color="white"
          >
            Contact Us
          </Typography>
          <Link
            variant="body2"
            sx={{
              marginBottom: "15px",
              alignSelf: "center",
            }}
            onClick={() => setIsContactModalOpen(true)}
            color="secondary"
          >
            Email: example@gmail.com
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            Stay in touch
          </Typography>

          <Link
            variant="body2"
            sx={{
              marginBottom: "15px",
              alignSelf: "center",
            }}
            onClick={() => setIsSubscribeModalOpen(true)}
            color="secondary"
          >
            Subscribe
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginBottom: "15px", textAlign: "center" }}
          >
            Follow Us
          </Typography>

          <CommonIconButton
            sx={{
              alignSelf: "center",
            }}
            iconColor="secondary"
            onClick={() =>
              window.open("http://www.instagram.com/purepiecetreats", "_blank")
            }
          >
            <InstagramIcon />
          </CommonIconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContact;
