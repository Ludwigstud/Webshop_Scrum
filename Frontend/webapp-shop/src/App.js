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
function App() {
  return (
    <AuthProvider>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/profile/paymentmethods" element={<PaymentMethodsScreen/>}/>
          <Route path="/profile/paymentmethods/addcreditcard" element={<AddCreditCardScreen/>}/>
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
