import { Route, Routes } from "react-router-dom";
import DynamicForm from "./components/dynamicForm";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const WatchPage = lazy(() => import("../src/components/homepage/index"));
  return (
    <Suspense fallback={<CircularProgress className="flex justify-center" />}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DynamicForm />} />
        <Route path="watch-page" element={<WatchPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
