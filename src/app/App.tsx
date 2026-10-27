import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import DevPage from "../pages/DevPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Public routes wrapped in Navbar + Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* Phase 4+ pages go here */}
      </Route>

      {/* Dev component showcase — no layout wrapper */}
      <Route path="/dev" element={<DevPage />} />
    </Routes>
  );
}

export default App;
