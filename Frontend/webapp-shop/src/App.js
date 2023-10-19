import { AuthProvider } from "./contexts/AuthContext";
import AccountCreated from "./components/AccountCreated/AccountCreated";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import SignIn from "./screens/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<RegistrateUserScreen />} />
            <Route path="/test" element={<AccountCreated />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
