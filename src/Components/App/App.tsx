import * as React from 'react';
import Menu from '../Menu/Menu';
import MonstersView from '../MonstersView/MonstersView';
import MonsterView from '../MonsterView/MonsterView';
import TabbedMonstersView from '../MonstersView/TabbedMonstersView';
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
                        <Route path="/" element={<TabbedMonstersView />} />
                        <Route path="/monster" element={<MonsterView />} />
                        <Route path="/treasure" element={<TreasureCalc />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;