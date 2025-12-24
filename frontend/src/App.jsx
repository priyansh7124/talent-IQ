import { Navigate, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import ProblemsPage from "./pages/ProblemsPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
