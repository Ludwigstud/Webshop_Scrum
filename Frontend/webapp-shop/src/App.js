import { AuthProvider } from "./contexts/AuthContext";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn/SignIn";
import ProductPage from "./screens/productPage/ProductPage";
<<<<<<< HEAD
import ProfileTest from "./screens/profileTest/ProfileTest"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/Register" element={<RegistrateUserScreen />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route path="/" element={<ProductPage />} />
            <Route exact path="/profiletest" element={<ProfileTest />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
=======
import Home from './screens/Home/Home'
import TopNavbar from "./components/topNavbar/TopNavbar";
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
                                <Route path="/product" element={<ProductPage />} />

                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
>>>>>>> 41ac7a5e984fa7f5ab8f706c4ddec199cd5d1d4a
}

export default App;
