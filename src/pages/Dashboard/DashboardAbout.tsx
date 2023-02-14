import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

import EndorsementCard from "../../components/common/EndorsementCard/EndorsementCard";
import ryan from "../../assets/images/ryan.png";
import { ENDORSEMENTS } from "../../constants/aboutConstants";
import dashboardStyles from "./styles/dashboardStyles";
interface Props {}

const DashboardAbout = ({}: Props) => {
  return (
    <Grid item xs={12} sx={dashboardStyles.section} id="dashboardAbout">
      <Typography variant="h3">About</Typography>

      {/* About us */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5">A little about us</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            display: "flex",
            height: "400px",
          }}
        >
          <Box
            component="img"
            alt="ryan"
            src={ryan}
            sx={{
              objectFit: "cover",
              height: "100%",
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginLeft: "50px",
              marginRight: "50px",
              lineHeight: "1.5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            viverra ex ligula, ac facilisis tellus faucibus vitae. Aenean sit
            amet imperdiet risus. Nulla interdum tellus lectus, id congue lectus
            interdum vitae. Aliquam luctus mattis libero et iaculis. Phasellus
            vulputate aliquam nunc eget suscipit. Aliquam efficitur, urna et
            sodales sodales, justo velit porttitor lacus, vel condimentum massa
            risus vitae dui. Integer nibh massa, condimentum quis neque vel,
            vehicula porttitor ex. Pellentesque a ligula consequat, pulvinar
            enim vitae, molestie mauris. Sed nulla arcu, aliquam ut placerat
            non, molestie eget quam. Sed dapibus aliquam magna, id consectetur
            elit auctor consequat. Duis ut lacus lacinia, fringilla metus quis,
            elementum metus. Nullam tincidunt interdum ipsum, auctor pulvinar
            odio eleifend sit amet.
          </Typography>
        </Grid>
      </Grid>

      <Divider
        variant="middle"
        sx={{ marginTop: "40px", marginBottom: "40px" }}
      />

      {/* endorsements */}
      <Typography variant="h5">What others are saying</Typography>
      {ENDORSEMENTS.map((endorsement, idx) => (
        <Box key={idx}>
          <EndorsementCard endorsement={endorsement} />
        </Box>
      ))}
    </Grid>
  );
};

export default DashboardAbout;
