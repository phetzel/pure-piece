import React from "react";
import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";

import { EndorsementType } from "../../types/aboutTypes";

export type Props = {
  endorsement: EndorsementType;
};

const EndorsementCard = ({ endorsement }: Props) => {
  const { petName, petImage, userName, userImage, review } = endorsement;
  return (
    <Box>
      <Grid container spacing={2} sx={{ marginBottom: "50px" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt={userName}
                src={userImage}
                sx={{
                  width: 75,
                  height: 75,
                  border: `4px solid white`,
                }}
              />
            }
          >
            <Avatar
              alt={petName}
              src={petImage}
              sx={{
                width: 300,
                height: 300,
              }}
            />
          </Badge>
          <Typography
            sx={{
              marginTop: "10px",
            }}
            variant="body1"
          >{`${petName} and ${userName}`}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            {review}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
            }}
          >
            {`- ${userName}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EndorsementCard;
