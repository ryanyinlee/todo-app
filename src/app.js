import React from 'react';


import Main from './components/Main';
import Theme from './context/settingscontext'

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


function App () {

return (
    <>
    
    <Theme>
    
    <Main />
    
    </Theme>
    
    </>
)
}

export default App