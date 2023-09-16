import { Route, Routes } from "react-router";
import HomePage from "./pages";
import "bootstrap/dist/css/bootstrap.css";
import PrivacyPolicy from "./components/privacy-policy";
function App() {

  return (
    <div className="App">
      <Routes >
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/*" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
