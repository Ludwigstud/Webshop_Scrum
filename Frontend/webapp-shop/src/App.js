import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
