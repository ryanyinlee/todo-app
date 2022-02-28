import React from 'react';


import Main from './components/Main';
import Theme from './context/settingscontext'

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";



import Login from './components/auth/Login.js';
import AuthContext from './components/auth/Context.js';


function App () {

return (
    <>
    <AuthContext>
        <Login/>
    <Theme>
    
    
    <Main />    
    

    </Theme>
    </AuthContext>
    </>
)
}

export default App