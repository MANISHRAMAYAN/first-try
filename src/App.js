import Login from "./auth/Login";
import Singup from "./auth/Singup";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Dasboard from "./component/Dasboard/Dasboard";
import Auth from "./auth/Auth";
import AddEmployee from "./component/AddEmployee";
import DeleteEmployee from "./component/DeleteEmployee";
import Update from "./component/Update";




export default function App()
{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/" element={<Singup />}/>
                    
                    <Route path="/dasboard" element={ <Auth><Dasboard /></Auth>}/>
                    <Route path="AddEmployee" element={ <Auth><AddEmployee/></Auth>}/>
                    <Route path="deleteEmployee/:id" element={ <Auth><DeleteEmployee/></Auth>}/>
                    <Route path="/update/:id" element={<Auth><Update /></Auth>}/>
                    
                </Routes>
            </Router>
        </>
    )
}