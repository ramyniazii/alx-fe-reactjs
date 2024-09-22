import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Usage in App.jsx
<Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
