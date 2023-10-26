
import { AuthProvider } from "./contexts/AuthContext";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/SignIn";
import ProductPage from "./screens/productPage/ProductPage";
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
                                <Route path="/" element={<ProductPage />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
