import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import ProductPage from './screens/productPage/ProductPage';
import Profile from './screens/profile/Profile';
import Home from './screens/Home/Home';
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./screens/SignIn/SignIn";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import MyAddresses from './screens/profile/Address/MyAddresses';
import AddAddress from './screens/profile/Address/AddAddress';
function App() {
  return (
    <AuthProvider>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/address' element={<MyAddresses/>}/>
          <Route path='/profile/address/add' element={<AddAddress/>}/>
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
