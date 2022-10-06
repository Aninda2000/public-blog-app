import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ marginTop: 40 }}>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Routes>
    </div>
  );
}

export default App;
