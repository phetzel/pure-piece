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
    black: true;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    white: true;
  }
}

// declare module "@mui/material/Typography" {
//   export interface TypographyPropsColorOverrides {
//     black: true;
//     white: true;
//   }
// }

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
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.7rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#73271a",
    },
    secondary: {
      main: "#fef204",
    },
    error: {
      main: "#d2232a",
    },
    black: {
      main: "#212121",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    // dash title
    h3: {
      // marginBottom: "10px",
    },
    // nav logo
    h4: {
      color: "white",
    },
    // dash sub title
    h5: {
      marginBottom: "20px",
      textAlign: "center",
    },
  },
});

// colors (over)
// -------------
// primary - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
// chocolate #73271a
// secondary - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
// gold #fef204
// error - used to represent interface elements that the user should be made aware of.
// red #d2232a
// black
// black #212121

// white - not being used
// off-white #e6e6e6

// warning - used to represent potentially dangerous actions or important messages.
// info - used to present information to the user that is neutral and not necessarily important.
// success - used to indicate the successful completion of an action that user triggered.
