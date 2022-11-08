import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import UserLoginPage from "./pages/UserLoginPage";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          {/* admin */}
          <Route path="/adminlogin" exact component={AdminLogin} />
          <Route path="/adminhome" exact component={AdminHome} />
          {/* user */}
          <Route path="/" exact component={UserHomePage} />
          <Route path="/login" component={UserLoginPage} />
          <Route path="/register" component={RegisterPage} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
