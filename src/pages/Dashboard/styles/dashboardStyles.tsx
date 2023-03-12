import highFive from "../../../assets/images/highFive.png";

export default {
  section: {
    py: 10,
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  divider: {
    my: 4,
  },
  // splash
  splashOuterContainer: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 5,
  },
  splashInnerContainer: {
    height: "100vh",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  splashContent: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "130px",
  },
  splashContentLogo: {
    objectFit: "cover",
    height: "200px",
    maxWidth: "100%",
    marginTop: "10px",
    marginBottom: "10px",
  },
  splashImageContainer: {
    justifyContent: "flex-end",
    display: { xs: "none", md: "flex" },
    paddingTop: "80px",
  },
  splashImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${highFive})`,
    height: "100%",
    width: "100%",
  },
  // about
  aboutImageContainer: {
    justifyContent: "center",
    display: "flex",
    height: "500px",
  },
  aboutImage: {
    objectFit: "cover",
    height: "100%",
    maxWidth: "100%",
  },
  aboutTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  aboutText: {
    textAlign: "center",
    marginLeft: "70px",
    marginRight: "70px",
    lineHeight: "1.5rem",
  },
  // contact
  contactContainer: {
    padding: "30px",
  },
};
