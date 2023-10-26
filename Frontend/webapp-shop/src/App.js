import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home'
import './scss/style.scss'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/Home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
