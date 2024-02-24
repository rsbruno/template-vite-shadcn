import { HomePage } from "@/pages/[public]";
import { Route, Routes } from "react-router-dom";

export function PublicRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />;
      </Route>
    </Routes>
  );
}
