import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Grid,
  Stack,
  Paper,
  Typography,
} from "@mui/material";

import { EndorsementType } from "../../../types/aboutTypes";

export type Props = {
  endorsement: EndorsementType;
};

const EndorsementCard = ({ endorsement }: Props) => {
  const { petName, petImage, userName, userImage, review } = endorsement;
  return (
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
  );
};

export default EndorsementCard;

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },

//   },
// }));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

// export default function BadgeAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Badge
//         overlap="circular"
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         badgeContent={
//           <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         }
//       >
//         <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       </Badge>
//     </Stack>
//   );
// }
