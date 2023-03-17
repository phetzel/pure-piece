const productModalStyles = {
  container: {
    overflow: "scroll",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    objectFit: "cover",
    height: "300px",
    maxWidth: "100%",
  },
  productName: {
    textAlign: "center",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    fontSize: "18px",
    marginTop: "15px",
  },
  quantitySelector: {
    m: 1,
    minWidth: 70,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    fontSize: "12px",
    marginRight: "10px",
    height: "50%",
  },
  buyButton: {
    fontSize: "12px",
    height: "50%",
  },
};

export default productModalStyles;
