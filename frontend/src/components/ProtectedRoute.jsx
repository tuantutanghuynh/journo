import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  //check if user is logged in
  const token = localStorage.getItem("token");

  //if not logged, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  //if logged in, showw the page normally
  return children;
}
