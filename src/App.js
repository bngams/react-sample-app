import React from 'react';
import Header from './layout/Header';
import ClockWithHook from './utils/ClockWithHook';
import Toggle from './utils/Toggle';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Toggle />
                <ClockWithHook />
            </div>
        )
    }
}
export default App;