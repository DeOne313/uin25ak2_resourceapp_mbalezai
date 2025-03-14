import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Resources from "./components/Resources";
import PageTitle from "./components/pageTitle";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="html" element={<Resources category="html" />} />
          <Route path="css" element={<Resources category="css" />} />
          <Route path="javascript" element={<Resources category="javascript" />} />
          <Route path="react" element={<Resources category="react" />} />
          <Route path="headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
        <PageTitle title="Ressursarkiv" />
      </Layout>
  );
}

export default App;