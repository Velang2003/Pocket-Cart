import { Routes, Route, Navigate } from "react-router-dom";
import DevPage from "../pages/DevPage";

function App() {
  return (
    <Routes>
      {/* Redirect root to /dev while building */}
      <Route path="/" element={<Navigate to="/dev" replace />} />
      <Route path="/dev" element={<DevPage />} />
      {/* Future routes go here */}
    </Routes>
  );
}

export default App;
