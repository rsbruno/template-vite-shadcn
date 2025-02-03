import { Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

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
