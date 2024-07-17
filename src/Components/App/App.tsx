import * as React from 'react';
import Menu from '../Menu/Menu';
import MonsterTable from '../MonsterTable/MonsterTable';
import ViewMonster from '../ViewMonster/ViewMonster';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <h1>חרבות וכשפים</h1>
                <Menu />
                
                    <Routes>
                        <Route path="/" element={<MonsterTable />} />
                        <Route path="/monster" element={<ViewMonster />} />
                    </Routes>
                
            </div>
            </Router>
        );
    }
}

export default App;