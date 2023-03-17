const headerStyles = {
  dropdown: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  contentContainer: {
    flexGrow: 1,
    display: { xs: "flex" },
  },
  logo: {
    objectFit: "cover",
    height: "60px",
    maxWidth: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  listContainer: {
    display: { xs: "none", md: "flex" },
    ml: 3,
    alignItems: "center",
  },
  listItem: {
    height: 50,
  },
};

export default headerStyles;
