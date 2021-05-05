import React from 'react';
import Header from './layout/Header';
import Toggle from './utils/Toggle';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Toggle />
            </div>
        )
    }
}
export default App;