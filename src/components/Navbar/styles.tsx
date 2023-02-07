export const navbarStyles = {
  drawer: {
    width: 320,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 320,
      boxSizing: "border-box",
      //   backgroundColor: "#101F33",
      color: "rgb(33, 33, 33)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  icons: {
    color: "rgb(33, 33, 33)!important",
    marginLeft: "20px",
  },
  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
    },
  },
};
