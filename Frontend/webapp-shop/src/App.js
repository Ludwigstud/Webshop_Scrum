import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import TopNavbar from './components/topNavbar/TopNavbar';
import ProductPage from './screens/productPage/ProductPage';
import Profile from './screens/profile/Profile';
import Home from './screens/Home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
