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
import { ProfileProvider } from './contexts/ProfileContext';
import EditAddress from './screens/profile/Address/EditAddress';
function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<ProductPage />} />
            
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/address' element={<MyAddresses/>}/>
              <Route path='/profile/address/add' element={<AddAddress/>}/>
              <Route path='/profile/address/edit/:id' element={<EditAddress/>}/>
            <Route path="/Register" element={<RegistrateUserScreen/>}/>
            <Route path="/signin" element={<SignIn/>}/>
          </Routes>
          <BottomNavbar />
        </div>
      </Router>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
