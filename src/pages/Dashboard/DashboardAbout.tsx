import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import EndorsementCard from "../../components/EndorsementCard/EndorsementCard";
// import CommonTitle from "../../components/common/CommonTitle/CommonTitle";
import CommonSubtitle from "../../components/common/CommonSubtitle/CommonSubtitle";
import CommonDivider from "../../components/common/CommonDivider/CommonDivider";
import about from "../../assets/images/about.jpg";
import { ABOUT, ENDORSEMENTS } from "../../constants/aboutConstants";
import dashboardStyles from "./styles/dashboardStyles";
import dog from "../../assets/images/dog.png";

interface Props {
  aboutRef: (node?: Element | null | undefined) => void;
  isVisible: boolean;
}

const DashboardAbout = ({ aboutRef, isVisible }: Props) => {
  return (
    <Box sx={{ width: "100%" }} id="dashboardAbout" ref={aboutRef}>
      <CommonDivider
        image={dog}
        title={"About us"}
        isVisible={isVisible}
        subTitle="Our philosophy"
      />

      <Container sx={dashboardStyles.section} maxWidth={false}>
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
              {/* {ABOUT} */}
              “A dog is the only thing on earth that loves you more than he
              loves himself.”
            </Typography>

            <Typography variant="body1" sx={dashboardStyles.aboutText}>
              I love that sentiment. And it started me thinking about what we
              feed the animals we love so much.
            </Typography>

            <Typography variant="body1" sx={dashboardStyles.aboutText}>
              I noticed that none of the treats in stores were organic. And most
              were not even produced in the United States. I knew I could source
              local, organic ingredients and make high quality treats—that are
              also affordable.
            </Typography>

            <Typography
              variant="body1"
              sx={dashboardStyles.aboutText}
              component="div"
            >
              So I started{" "}
              <Box fontWeight={700} display="inline">
                Pure Piece Treats
              </Box>
              --with the sole objective of creating a human- grade, organic
              product that dogs love. I hope you—and your loyal canine
              companion—enjoy it.
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
