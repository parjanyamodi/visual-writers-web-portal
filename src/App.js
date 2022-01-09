import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AddEvent from "./Components/AddEvent";
import ManageEvent from "./Components/ManageEvent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AddEvent />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/manageevent" element={<ManageEvent />} />
          <Route path="/*" element={<AddEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
