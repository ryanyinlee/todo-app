import React from 'react';

export const DisplayContext = React.createContext(); //show and hide

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            setting: 'show',
            itemsShown: 3,
            defaultSortField: ''
        };
    }
    render() {
        return(
            <DisplayContext.Provider value={this.state}>
                {this.props.children}
            </DisplayContext.Provider>

        );
    }

}

export default Display;
// Display or Hide completed items (boolean).
// Number of items to display per screen (number).
// Default sort field (string).
// Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.