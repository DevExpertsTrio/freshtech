import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 350,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
  },
  iconButton: {
    "&:focus": {
      outline: "none",
    },
  },
  cartList: {
    flex: 1,
    overflowY: "auto",
    marginBottom: 16,
  },
  emptyCart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100% - 56px)",
  },
  cartIcon: {
    fontSize: "150px !important",
    color: theme.palette.text.secondary,
  },
  emptyText: {
    marginTop: 2,
    color: theme.palette.text.secondary,
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    background: "#f9f9f9",
    marginBottom: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    display: "flex",
    flexDirection: "column",
  },
  itemName: {
    fontWeight: "bold",
  },
  itemPrice: {
    color: "#555",
  },
  deleteButton: {
    color: "#d32f2f",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
  },
  itemColorBox: {
    padding: "4px 12px",
    fontSize: "14px !important",
  },
  quantityButton: {
    background: "#f0f0f0",
    borderRadius: 8,
  },
  quantityText: {
    minWidth: 24,
    textAlign: "center",
  },
  checkoutContainer: {
    padding: 16,
    background: "#fff",
    borderTop: "1px solid #e0e0e0",
    position: "sticky",
    bottom: 0,
    zIndex: 1, 
  },
  checkoutButton: {
    borderRadius: 8,
    width: "100%",
  },
}));

export default useStyles;