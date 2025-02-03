import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/[public]";

export function PublicRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />;
      </Route>
    </Routes>
  );
}
