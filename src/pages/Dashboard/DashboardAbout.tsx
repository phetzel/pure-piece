import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import EndorsementCard from "../../components/EndorsementCard/EndorsementCard";
import CommonTitle from "../../components/common/CommonTitle/CommonTitle";
import CommonSubtitle from "../../components/common/CommonSubtitle/CommonSubtitle";
import CommonDivider from "../../components/common/CommonDivider/CommonDivider";
import about from "../../assets/images/about.jpg";
import { ENDORSEMENTS } from "../../constants/aboutConstants";
import dashboardStyles from "./styles/dashboardStyles";
import dog from "../../assets/images/dog.png";

interface Props {}

const DashboardAbout = ({}: Props) => {
  return (
    <Box sx={{ width: "100%" }} id="dashboardAbout">
      <CommonDivider image={dog} title={"About us"} />
      <Container sx={dashboardStyles.section}>
        {/* title */}
        {/* <CommonTitle title={"About us"} subTitle={"Our philosophy"} /> */}
        <CommonSubtitle subTitle="Our philosophy" />

        {/* About us */}
        <Grid container spacing={1}>
          {/* image */}
          <Grid item xs={12} md={6} sx={dashboardStyles.aboutImageContainer}>
            <Box
              component="img"
              alt="ryan"
              src={about}
              sx={dashboardStyles.aboutImage}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={dashboardStyles.aboutTextContainer}>
            <Typography variant="body2" sx={dashboardStyles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              viverra ex ligula, ac facilisis tellus faucibus vitae. Aenean sit
              amet imperdiet risus. Nulla interdum tellus lectus, id congue
              lectus interdum vitae. Aliquam luctus mattis libero et iaculis.
              Phasellus vulputate aliquam nunc eget suscipit. Aliquam efficitur,
              urna et sodales sodales, justo velit porttitor lacus, vel
              condimentum massa risus vitae dui. Integer nibh massa, condimentum
              quis neque vel, vehicula porttitor ex. Pellentesque a ligula
              consequat, pulvinar enim vitae, molestie mauris. Sed nulla arcu,
              aliquam ut placerat non, molestie eget quam. Sed dapibus aliquam
              magna, id consectetur elit auctor consequat. Duis ut lacus
              lacinia, fringilla metus quis, elementum metus. Nullam tincidunt
              interdum ipsum, auctor pulvinar odio eleifend sit amet.
            </Typography>
          </Grid>
        </Grid>

        {/* divider */}
        <Divider variant="middle" sx={dashboardStyles.divider} />

        {/* endorsements */}
        <CommonSubtitle subTitle={"What others are saying"} />
        {ENDORSEMENTS.map((endorsement, idx) => (
          <Box key={idx}>
            <EndorsementCard endorsement={endorsement} />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default DashboardAbout;
