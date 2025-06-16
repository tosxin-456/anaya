import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUpPage from "./pages/sign up";
import SignInPage from "./pages/sign in";
import AnayaWelcome from "./pages/welcome-page";
import SkincareConsultation from "./pages/onboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<AnayaWelcome />} />
        <Route path="/onboarding" element={<SkincareConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;
