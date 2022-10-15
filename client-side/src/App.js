import "./App.css";
import Login from "./components/Login";
import { Route,  Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ marginTop: 40 }}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
