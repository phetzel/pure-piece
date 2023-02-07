import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/system" {
  interface DefaultTheme extends Theme {}
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }
}

declare module "@mui/material/AppBar" {
  export interface AppBarPropsColorOverrides {
    black: true;
  }
}

declare module "@mui/material/IconButton" {
  export interface IconButtonPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsColorOverrides {
    black: true;
    white: true;
  }
}

export const globalTheme: Theme = createTheme({
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "0.875rem",
    //       fontWeight: 600,
    //       borderRadius: 8.5,
    //       textTransform: "none",
    //       "&.MuiButton-contained": {
    //         backgroundColor: "#009be5",
    //         "&:hover": {
    //           backgroundColor: "#006db3",
    //         },
    //       },
    //       "&.MuiButton-outlined": {
    //         color: "#fff",
    //         borderColor: "rgba(255, 255, 255, 0.7)",
    //         "&:hover": {
    //           backgroundColor: "rgba(0, 0, 0, 0.04)",
    //         },
    //       },
    //     },
    //   },
    // },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.7rem",
        },
      },
    },
  },
  palette: {
    black: {
      main: "#212121",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    // h1: {
    //   fontSize: "1.6rem",
    //   fontWeight: 600,
    //   color: "#fff",
    //   letterSpacing: "0.5px",
    //   textTransform: "capitalize",
    // },
  },
});
