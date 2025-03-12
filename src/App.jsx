import { useState } from "react";
// Importerer produkter fra en ekstern fil
import { resources } from "./assets/resources";

// Importerer stilfilen for appen
import "./style/style.scss";
import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import ResourceList from "./components/resources";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/html" element={<ResourceList category="html" />} />
          <Route path="/css" element={<ResourceList category="css" />} />
          <Route path="/javascript" element={<ResourceList category="javascript" />} />
          <Route path="/react" element={<ResourceList category="react" />} />
          <Route path="/sanity" element={<ResourceList category="sanity" />} />
        </Routes>
      </Layout>
  );
}

export default App;