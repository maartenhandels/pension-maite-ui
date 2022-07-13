import React from "react";

import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import { siteMap } from "./SiteMap";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {Object.keys(siteMap).map((key, index) => (
          <Route
            key={index}
            path={siteMap[key].path}
            element={siteMap[key].component}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
