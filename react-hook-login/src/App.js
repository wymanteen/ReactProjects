import { useState} from "react";
import Login from "./components/Login";
import {ReferenceLoginContext} from "./components/ReferenceLoginContext";
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
        <ReferenceLoginContext.Provider value={{ authenticated, setAuthenticated }}>
            <Login />
        </ReferenceLoginContext.Provider>

        <h1>App(Main)</h1>
        isLogin(App) = {authenticated?'Y' : 'N'}
    </div>
  );
}

export default App;
