import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "2px 4px",
      color: "black",
      textDecoration: "none",
      fontWeight: "500px",
      border: "1px solid black",
      margin: "3px",
      borderRadius: "3px",
      "&:hover ": {
        color: "orangered",
      }
    }}>
      <HiArrowLeft size="18" />
      {children}
    </Link >
  );
};

