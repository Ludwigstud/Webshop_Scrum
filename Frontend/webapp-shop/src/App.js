import { AuthProvider } from "./contexts/AuthContext";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/SignIn";
import ProductPage from "./screens/productPage/ProductPage";
import Home from './screens/Home/Home'
import TopNavbar from "./components/topNavbar/TopNavbar";
import Reviews from "./components/Reviews/ReviewList"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
function App() {



    return (
        <>
            <AuthProvider>
                <TopNavbar/>
                <Router>
                    <Routes>
                    <Route path="/" element={<Home />} />
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
                                <Route path="/product" element={<ProductPage />} 
                                
                                
                        />

                                <Route path="/Reviews" element={<Reviews />} 

                        />

                                <Route path="/ShoppingCart" element={<ShoppingCart />} 

                        />
                                

                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
