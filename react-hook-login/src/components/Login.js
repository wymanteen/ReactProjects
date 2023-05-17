
import { useContext } from 'react';
import {ReferenceLoginContext} from "./ReferenceLoginContext"

const Login = () =>{

    const { authenticated, setAuthenticated }  = useContext(ReferenceLoginContext);

    const clickhandle = () => setAuthenticated(!authenticated);

    
    return (
        <div>
            <h1>Login Component</h1>
            is authenticated = {authenticated?'Y':'N'}<br/>
            <button onClick={clickhandle}>{authenticated?'Logout':'Login'}</button>      
        </div>
      )

}

export default Login
