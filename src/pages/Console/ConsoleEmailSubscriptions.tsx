import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import {
  toggleLoading,
  updateToastState,
} from "../../redux/slices/navigationSlice";
import {
  getSubscriptions,
  updateSubscription,
} from "../../services/subscriptionServices";
import {
  SubscriptionType,
  UpdateSubscriptionInput,
} from "../../types/subscriptionTypes";

export type Props = {};

const ConsoleEmailSubscriptions = ({}: Props) => {
  const [sunscriptions, setSubscriptions] = useState<SubscriptionType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetSubscriptions();
  }, []);

  const handleGetSubscriptions = () => {
    setSubscriptions([]);
    dispatch(toggleLoading(true));

    getSubscriptions().then((res) => {
      if (typeof res != "string") {
        setSubscriptions(res);
      }

      dispatch(toggleLoading(false));
    });
  };

  const handleUpdateEnabled = async (newRow: GridRowModel) => {
    const updateParams: UpdateSubscriptionInput = {
      id: newRow.id,
      field: "enabled",
      newValue: newRow.enabled,
    };
    const subscription = await updateSubscription(updateParams);

    dispatch(
      updateToastState({
        children: "Subscription successfully updated",
        severity: "success",
      })
    );

    return subscription;
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    dispatch(updateToastState({ children: error.message, severity: "error" }));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "enabled",
      headerName: "Email Enabled",
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
    {
      field: "subscribed",
      headerName: "Email Subscribed",
      type: "boolean",
      width: 150,
      editable: false,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={sunscriptions}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={handleUpdateEnabled}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
    </Box>
  );
};

export default ConsoleEmailSubscriptions;
