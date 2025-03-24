import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Projects from "./Pages/Projects/Projects";
import DataSource from "./Pages/DataSources/DataSource";
import Models from "./Pages/Models/Models";
import Settings from "./Pages/Settings/Settings";
import Connectors from "./Pages/Connectors/Connectors";
import CreateConnector from "./Pages/Connectors/CreateConnector";
import UpdateConnector from "./Pages/Connectors/UpdateConnector";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />}></Route>
        <Route path="data-sources" element={<DataSource />}></Route>
        <Route path="models" element={<Models />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="connectors" element={<Connectors />}></Route>
        <Route path="/create-connector" element={<CreateConnector />}></Route>
        <Route path="/update/:id" element={<UpdateConnector />} />

      </Route>
    </Routes>
  );
}

export default App;
