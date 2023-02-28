import React, { useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

// constants
import dashboardStyles from "./styles/dashboardStyles";
// compomnent
import CommonIconButton from "../../components/common/CommonIconButton/CommonIconButton";
import ContactModal from "../../components/Modals/ContactModal/ContactModal";
import SubscribeModal from "../../components/Modals/SubscribeModal/SubscribeModal";
// image
import logoLight from "../../assets/images/logoLight.png";

interface Props {}

const DashboardContact = ({}: Props) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] =
    useState<boolean>(false);

  return (
    <Box id="dashboardContact" component="footer">
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
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            alt={"Logo"}
            src={logoLight}
            sx={{
              // objectFit: "cover",
              height: "auto",
              width: "100px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "15px", textAlign: "center", fontSize: "18px" }}
            color="text.white"
          >
            Contact Us
          </Typography>
          <Link
            variant="body1"
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
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "15px", textAlign: "center", fontSize: "18px" }}
          >
            Stay in touch
          </Typography>

          <Link
            variant="body1"
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
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justiyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "15px", textAlign: "center", fontSize: "18px" }}
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
    </Box>
  );
};

export default DashboardContact;
