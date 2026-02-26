import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import  {Toaster} from "react-hot-toast"


const App = () => {
  return (
    <>
     <Toaster position="bottom-right" reverseOrder={false} />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path ="/register" element={<Register/>} />
      <Route path ="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default App