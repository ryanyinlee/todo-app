import React from 'react';

import ToDo from './components/todo/todo.js';

const displayContext = React.createContext('show'); //show and hide

function App () {

return (
    <ToDo />
)
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <ToDo />
//     );
//   }
// }

export default App