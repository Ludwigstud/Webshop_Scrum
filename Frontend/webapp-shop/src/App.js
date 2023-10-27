import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import TopNavbar from './components/topNavbar/TopNavbar';
import ProductPage from './screens/productPage/ProductPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <BottomNavbar />
        <Routes>
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
