import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Landing } from "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import { AllGames } from "./pages/AllGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index
            element={<Landing />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="games"
            element={<AllGames />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
