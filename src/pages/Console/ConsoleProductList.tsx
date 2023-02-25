import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import {
  toggleLoading,
  updateToastState,
} from "../../redux/slices/navigationSlice";
import { getProducts } from "../../services/productServices";

export type Props = {};

const ConsoleProductList = ({}: Props) => {
  const [products, setProducts] = useState<any[]>([]);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = () => {
    setProducts([]);
    dispatch(toggleLoading(true));

    getProducts()
      .then((res) => {
        if (typeof res != "string") {
          setProducts(res);
        }
        dispatch(toggleLoading(false));
      })
      .catch((err) => {
        dispatch(toggleLoading(false));
        console.log(err);
      });
  };

  const handleUpdateEnabled = async (newRow: GridRowModel) => {
    // const updateParams: UpdateSubscriptionInput = {
    //   id: newRow.id,
    //   field: "enabled",
    //   newValue: newRow.enabled,
    // };
    // const subscription = await updateSubscription(updateParams);

    // dispatch(
    //   updateToastState({
    //     children: "Subscription successfully updated",
    //     severity: "success",
    //   })
    // );

    return newRow;
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    // dispatch(updateToastState({ children: error.message, severity: "error" }));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      editable: true,
    },
    {
      field: "active",
      headerName: "Active",
      type: "boolean",
      width: 100,
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
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      editable: true,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={handleUpdateEnabled}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
    </Box>
  );
};

export default ConsoleProductList;
