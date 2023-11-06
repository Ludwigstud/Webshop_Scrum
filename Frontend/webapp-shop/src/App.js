import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import ProductPage from './screens/productPage/ProductPage';
import Profile from './screens/profile/Profile';
import Home from './screens/Home/Home';
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./screens/SignIn/SignIn";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import WishListPage from './screens/WishListPage/Favorites.jsx';
function App() {
  return (
    <AuthProvider>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/favorites' element={<WishListPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/Register" element={<RegistrateUserScreen/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
