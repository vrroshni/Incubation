import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHomePage from "./pages/UserHomePage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from './pages/RegisterPage'
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path="/" exact component={UserHomePage} />
          <Route path="/login" component={UserLoginPage} />
          <Route path="/register" component={RegisterPage} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
