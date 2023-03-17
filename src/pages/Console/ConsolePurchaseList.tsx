import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Link } from "@mui/material";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import {
  toggleLoading,
  updateToastState,
} from "../../redux/slices/navigationSlice";
import { getPurchases } from "../../services/paymentServices";
import { GetPaymentsType } from "../../types/paymentTypes";
import consoleStyles from "./styles/consoleStyles";

export type Props = {};

const ConsolePurchaseList = ({}: Props) => {
  const [purchases, setPurchases] = useState<GetPaymentsType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetSubscriptions();
  }, []);

  const handleGetSubscriptions = () => {
    setPurchases([]);
    dispatch(toggleLoading(true));

    getPurchases().then((res) => {
      if (typeof res != "string") {
        setPurchases(res);
      }

      dispatch(toggleLoading(false));
    });
  };

  const handleUpdateEnabled = async (newRow: GridRowModel) => {
    // return subscription;
    return newRow;
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    dispatch(updateToastState({ children: error.message, severity: "error" }));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "stripe_id",
      headerName: "Stripe id",
      width: 150,
      editable: false,
      renderCell: (params) => {
        console.log(params);
        return <Link>Link</Link>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "fulfilled",
      headerName: "Product Shipped?",
      type: "boolean",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return params.value ? (
          <CheckIcon color="primary" />
        ) : (
          <CloseIcon color="primary" />
        );
      },
    },
  ];

  return (
    <Box sx={consoleStyles.table}>
      <DataGrid
        rows={purchases}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={handleUpdateEnabled}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
    </Box>
  );
};

export default ConsolePurchaseList;
