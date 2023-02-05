import logo from "./logo.svg";
import "./App.css";
import "./main.css";
import Login from "./views/login";
import { StudentReg, StaffReg } from "./views/registration";
import { ModuleResults, NewResults, ViewResults } from "./views/results";
import { Home } from "./views/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/register/student" element={<StudentReg />} />
        <Route path="/register/staff" element={<StaffReg />} />
        <Route path="/view-results/staff" element={<ModuleResults />} />
        <Route path="/view-results/student" element={<ViewResults />} />
        <Route path="/new-results" element={<NewResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
