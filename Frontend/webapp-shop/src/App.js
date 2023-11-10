import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import ProductPage from './screens/productPage/ProductPage';
import Profile from './screens/profile/Profile';
import Home from './screens/Home/Home';
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./screens/SignIn/SignIn";
import RegistrateUserScreen from "./screens/RegistrateUserScreen/RegistrateUserScreen";
import PaymentMethodsScreen from './screens/profile/paymentMethods/paymentMethodsScreen/paymentMethodsScreen';
import AddCreditCardScreen from './screens/profile/paymentMethods/CreateCreditCardScreen/AddCreditCardScreen';
import MyAddresses from './screens/profile/Address/MyAddresses';
import AddAddress from './screens/profile/Address/AddAddress';
import { ProfileProvider } from './contexts/ProfileContext';
import EditAddress from './screens/profile/Address/EditAddress';
import EditCreditCardScreen from './screens/profile/paymentMethods/EditCreditCardScreen/EditCreditCardScreen';
import PasswordResetScreen from './screens/Password/ResetPasswordScreen';
import UpdatePasswordScreen from './screens/Password/UpdatePasswordScreen';
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
            <Route path="/profile/paymentmethods" element={<PaymentMethodsScreen/>}/>
            <Route path="/profile/paymentmethods/addcreditcard" element={<AddCreditCardScreen/>}/>
            <Route path="/profile/paymentmethods/edit/:id" element={<EditCreditCardScreen/>}/>
            <Route path="/Register" element={<RegistrateUserScreen/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/resetpassword" element={<PasswordResetScreen/>}/>
            <Route path="/updatepassword" element={<UpdatePasswordScreen/>}/>
          </Routes>
          <BottomNavbar />
        </div>
      </Router>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
