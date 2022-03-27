import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../screens";

export function AppNavigation() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
