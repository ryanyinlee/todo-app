import React from 'react';


import Main from './components/Main';
import Theme from './context/settingscontext'

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import LoginContext from './components/auth/context.js';


function App () {

return (
    <>
    <LoginContext>
        <Login/>
    <Theme>
    
    <Auth>
    <Main />    
    </Auth>

    </Theme>
    </LoginContext>
    </>
)
}

export default App