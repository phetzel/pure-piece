import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export type Props = {};

const ConsoleEmailForm = ({}: Props) => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  console.log("subject", subject);
  console.log("message", message);

  const handleSendEmail = () => {};

  return (
    <Box>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
        id="checkoutPage"
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h6" color="black" align="center">
            Send a new email
          </Typography>
          <TextField
            required
            id="emailSubject"
            name="emailSubject"
            label="Email subject"
            fullWidth
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSubject(event.target.value);
            }}
          />

          <TextField
            required
            id="emailMessage"
            name="emailMessage"
            label="Email message"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
            }}
            minRows={4}
            multiline
            sx={{ my: 1 }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "12px",
            }}
            onClick={handleSendEmail}
          >
            Send
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConsoleEmailForm;
