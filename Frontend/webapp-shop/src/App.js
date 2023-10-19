import { AuthProvider } from "./contexts/AuthContext";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/SignIn";
function App() {



    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/Register"
                            element={<RegistrateUserScreen/>}
                        />
                            <Route
                            exact
                            path="/signin"
                            element={<SignIn/>}
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
