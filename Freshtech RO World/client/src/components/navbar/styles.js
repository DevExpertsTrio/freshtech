import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    "&:focus": {
      outline: "none",
    },
  },
  appBar: {
    backgroundColor: "#1f2937 !important",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1) !important",
    padding: "12px 24px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "40px",
  },
  companyName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#ffffff",
  },
  searchInput: {
    width: "15rem",
    backgroundColor: "white",
    borderRadius: "0.2em",
    "& .MuiOutlinedInput-root": {
      height: "2rem",
      padding: "4px",
    },
  },
  phoneText: {
    color: "#ffffff",
    display: { xs: "none", sm: "block" },
  },
  popoverBlock: {
    transform: "translateX(5%)",
  },
  popoverContent: {
    padding: theme.spacing(1),
    minWidth: 220,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  greetingText: {
    fontWeight: 600,
    fontSize: "16px",
    color: "#000",
  },
  closeButton: {
    color: "#333",
  },
  menuItem: {
    fontSize: "14px",
    color: "#333",
    cursor: "pointer",
    padding: theme.spacing(1, 0),
  },
  logoutButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "#1E1E1E",
    color: "#fff",
    width: "100%",
    padding: "8px",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));

export default useStyles;
