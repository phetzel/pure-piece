import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { adminLoggedOut } from "../../redux/slices/adminSlice";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";

interface Props {}

const Console = ({}: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <GridWrapper>
      <Container component="main" maxWidth="xs">
        <Typography>Admin Console</Typography>
        <Button onClick={() => dispatch(adminLoggedOut(null))}>Log out</Button>
      </Container>
    </GridWrapper>
  );
};

export default Console;
