import { BrowserRouter as Router } from 'react-router-dom';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
