import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Loginpage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage'
import WelcomePage from './pages/WelcomePage'
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/" exact component={WelcomePage} /> */}
          <Route path="/login" component={Loginpage} />
          <Route path="/register" component={RegisterPage} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
