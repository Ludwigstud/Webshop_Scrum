import RegistrateUser from "./screens/RegistrateUser/RegistrateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Register" element={<RegistrateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
