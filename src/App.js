import React , {useState} from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


//react-router
import {BrowserRouter , Routes , Route , Link} from "react-router-dom"


//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"


//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"


//components 
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext  } from "./context/UserContext";
import Footer  from "./layout/Footer";
import Header from "./layout/Header";


//context



import firebaseConfig from "./Config/FirebaseConfig"
// import { initializeApp } from 'firebase/compat/app';


//init firebase
firebase.initializeApp(firebaseConfig)


function App() {

const [user, setUser] = useState(null)

  return (

    <BrowserRouter>
  <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
      <Header/>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </UserContext.Provider>


    </BrowserRouter>
    

  );
}

export default App;
