import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import UserLoginPage from "./pages/UserLoginPage";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from "./context/AuthContext";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
          {/* admin */}
          <Route path="/adminlogin" exact element={<AdminLogin/>} />
          <Route path="/adminhome" exact element={<AdminHome/>} />
          
          {/* user */}
          <Route path="/" exact element={<UserHomePage/>} />
          <Route path="/login" element={<UserLoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/application" element={<ApplicationForm/>} />
          
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
