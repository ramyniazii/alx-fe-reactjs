import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjust the path as necessary

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
