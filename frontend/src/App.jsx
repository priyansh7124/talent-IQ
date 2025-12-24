import { Navigate, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import ProblemsPage from "./pages/ProblemsPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
function App() {
  const { isSignedIn, isLoaded } = useUser();
  // this will prevent the UI from flickering while Clerk loads and checks the auth state
  if (!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
