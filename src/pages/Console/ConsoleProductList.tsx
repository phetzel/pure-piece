import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridValueFormatterParams,
  GridColDef,
  GridRowModel,
} from "@mui/x-data-grid";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import {
  toggleLoading,
  updateToastState,
} from "../../redux/slices/navigationSlice";
import { UpdateProductInputType } from "../../types/productTypes";
import { getProducts, updateProduct } from "../../services/productServices";
import consoleStyles from "./styles/consoleStyles";

export type Props = {};

const ConsoleProductList = ({}: Props) => {
  const [products, setProducts] = useState<any[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = () => {
    setProducts([]);
    dispatch(toggleLoading(true));

    getProducts({ isActiveOnly: false })
      .then((res) => {
        if (typeof res != "string") {
          setProducts(res);
        }
        dispatch(toggleLoading(false));
      })
      .catch((err) => {
        dispatch(toggleLoading(false));
      });
  };

  const handleUpdateEnabled = async (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => {
    let updateObj: UpdateProductInputType | null = null;
    const newKeys = Object.keys(newRow);

    for (let i = 0; i < newKeys.length; i++) {
      const objectKey = newKeys[i];

      if (newRow[objectKey] !== oldRow[objectKey]) {
        updateObj = {
          id: newRow.id,
          field: objectKey,
          value: newRow[objectKey],
        };

        break;
      }
    }

    if (updateObj) {
      const product = await updateProduct(updateObj);

      dispatch(
        updateToastState({
          children: "Product successfully updated",
          severity: "success",
        })
      );

      return product;
    } else {
      return newRow;
    }
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    // dispatch(updateToastState({ children: error.message, severity: "error" }));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
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
      headerName: "Price ($)",
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
    { field: "id", headerName: "ID", width: 50 },
  ];

  return (
    <Box sx={consoleStyles.table}>
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
