import * as React from 'react';
import Menu from '../Menu/Menu';
import MonsterTable from '../MonsterTable/MonsterTable';
import ViewMonster from '../ViewMonster/ViewMonster';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import TreasureCalc from '../TreasureCalc/TreasureCalc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ButtonAppBar />
                    <Routes>
                        <Route path="/" element={<MonsterTable />} />
                        <Route path="/monster" element={<ViewMonster />} />
                        <Route path="/treasure" element={<TreasureCalc />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;