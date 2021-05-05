import React from 'react';
import Header from './layout/Header';
import UserList from './user/list/UserList';
import ClockWithHook from './utils/ClockWithHook';
import Toggle from './utils/Toggle';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Toggle />
                <ClockWithHook />
                <UserList />
            </div>
        )
    }
}
export default App;