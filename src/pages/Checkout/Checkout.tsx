import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Link,
  Typography,
} from "@mui/material";

// redux
import { RootState } from "../../redux/store";

// components
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import CheckoutAddressForm from "./CheckoutAddressForm";
import CheckoutPaymentForm from "./CheckoutPaymentForm";
import CheckoutReview from "./CheckoutReview";
// constants
import { CHECKOUT_STEPS } from "../../constants/checkoutConstants";

interface Props {}

const Checkout = ({}: Props) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const cartState = useSelector((state: RootState) => state.product.cartState);

  const handleGetStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CheckoutAddressForm />;
      case 1:
        return <CheckoutPaymentForm />;
      case 2:
        return <CheckoutReview cart={cartState} />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <GridWrapper>
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
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            align="center"
          >
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {CHECKOUT_STEPS.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === CHECKOUT_STEPS.length ? (
            <Box>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </Box>
          ) : (
            <Box>
              {handleGetStepContent(activeStep)}

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handlePreviousStep} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNextStep}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === CHECKOUT_STEPS.length - 1
                    ? "Place order"
                    : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </GridWrapper>
  );
};

export default Checkout;
