import { useEffect, useState } from "react";
import API from "../lib/axios";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    API.get("/dashboard")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p>Loading...</p>;

  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;