import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";

export function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/app/*" element={<PrivateRoutes />} />;
        <Route path="/*" element={<PublicRoutes />} />;
      </Route>
    </Routes>
  );
}
