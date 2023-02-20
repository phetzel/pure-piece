import React, { useState } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

// constants
import dashboardStyles from "./styles/dashboardStyles";
// compomnent
import CommonIconButton from "../../components/common/CommonIconButton/CommonIconButton";
import ContactModal from "../../components/common/ContactModal/ContactModal";

interface Props {}

const DashboardContact = ({}: Props) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  return (
    <Grid item xs={12} sx={dashboardStyles.section} id="dashboardContact">
      <ContactModal
        isOpen={isContactModalOpen ? true : false}
        handleClose={() => setIsContactModalOpen(false)}
      />

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Contact
          </Typography>
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
            Contact Us
          </Typography>
          <Link
            variant="body2"
            sx={{
              marginBottom: "15px",
              alignSelf: "center",
            }}
            onClick={() => setIsContactModalOpen(true)}
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
            onClick={() => setIsContactModalOpen(true)}
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
            iconColor="black"
            onClick={() =>
              window.open("http://www.instagram.com/purepiecetreats", "_blank")
            }
          >
            <InstagramIcon />
          </CommonIconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardContact;
