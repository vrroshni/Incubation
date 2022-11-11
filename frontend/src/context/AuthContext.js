import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const[viewdetail,setviewdetails]=useState([])

  const Navigate = useNavigate();



  let userSignup = async (e) => {
    e.preventDefault();
    let response = await axios.post("http://127.0.0.1:8000/register/",
      { 'username': e.target.name.value, 'email': e.target.email.value, 'password': e.target.password.value })
    if (response.status === 200) {
      Navigate('/login')
    }
    else {
      alert('......................')

    }
  }

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });



    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      if(jwt_decode(data.access).is_superuser){
        Navigate('/adminhome')
      }else{
        Navigate('/')
      }
    } else {
      alert("something went wrong");
    }
  };

  
  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    Navigate("/");
  };


  let updateToken = async () => {
    console.log("update token......");
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
    if (loading) {
      setLoading(false)
    }
  };



  let viewDetails = (id)=> {
    alert('going for  detailssssssssssss')
    axios.get(`http://127.0.0.1:8000/viewdetail/${id}`).then((response)=>{
      setviewdetails(response.data)
      alert('got detailssssssssssss')

})

}

  let contextData = {
    user: user,
    authTokens: authTokens,
    viewdetail:viewdetail,
    loginUser: loginUser,
    logoutUser: logoutUser,
    userSignup: userSignup,
    viewDetails:viewDetails
  };


  useEffect(() => {
    if (loading) {
      updateToken()
    }


    let fourminutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourminutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);


  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
