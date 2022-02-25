import React from 'react';

import Header from './components/header/header';
import ToDo from './components/todo/Main.js';
import Theme from './context/settingscontext'
import Footer from './components/footer/footer';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


function App () {

return (
    <>
    <Header/>
    <Theme>
    
    <ToDo />
    
    </Theme>
    <Footer/>
    </>
)
}

export default App