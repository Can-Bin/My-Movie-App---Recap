import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}
export default AppRouter;