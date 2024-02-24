import { HomePrivatePage } from "@/pages/[private]";
import { Route, Routes } from "react-router-dom";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePrivatePage />} />;
      </Route>
    </Routes>
  );
}
