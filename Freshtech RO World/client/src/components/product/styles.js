import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#dfdfdf",
    },
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    cursor: "pointer",
  },
  cardContent: {
    padding: "15px",
  },
  productName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
  },
  productFeatures: {
    color: "#666",
    marginBottom: "10px",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    marginBottom: "10px",
  },
  discountPrice: {
    color: "#e63946",
    fontSize: "18px",
    fontWeight: "bold",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#999",
  },
  discountBox: {
    backgroundColor: "#ff4757",
    color: "white",
    padding: "3px 6px",
    fontSize: "12px",
    borderRadius: "5px",
  },
  price: {
    color: "#333",
    fontSize: "18px",
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#10b981",
    color: "white",
    padding: "10px 15px",
    borderRadius: "6px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#0f9b75",
    },
  },
}));

export default useStyles;
