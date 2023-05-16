
import { useContext } from 'react';
import {ReferenceLoginContext} from "./ReferenceLoginContext"

const Login = () =>{

    const { setAuthenticated }  = useContext(ReferenceLoginContext);

    const handleLogin = () => setAuthenticated(true);
    const handleLogout = () => setAuthenticated(false);

    
    return (
        <div>
            <h1>Login Component</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>          
        </div>
      )

}

export default Login