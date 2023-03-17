import React from "react";
import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";

import { EndorsementType } from "../../types/aboutTypes";
import endorsementCardStyles from "./styles/endorsementCardStyles";

export type Props = {
  endorsement: EndorsementType;
};

const EndorsementCard = ({ endorsement }: Props) => {
  const { petName, petImage, userName, userImage, review } = endorsement;
  return (
    <Box>
      <Grid container spacing={2} sx={endorsementCardStyles.container}>
        {/* images */}
        <Grid item xs={12} md={6} sx={endorsementCardStyles.imageContainer}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt={userName}
                src={userImage}
                sx={endorsementCardStyles.userAvatar}
              />
            }
          >
            <Avatar
              alt={petName}
              src={petImage}
              sx={endorsementCardStyles.dogAvatar}
            />
          </Badge>
          <Typography
            sx={endorsementCardStyles.names}
            variant="body1"
          >{`${petName} and ${userName}`}</Typography>
        </Grid>

        {/* text */}
        <Grid item xs={12} md={6} sx={endorsementCardStyles.textContainer}>
          <Typography
            variant="body2"
            sx={endorsementCardStyles.endorsementText}
          >
            {review}
          </Typography>
          <Typography variant="body1" sx={endorsementCardStyles.username}>
            {`- ${userName}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EndorsementCard;
