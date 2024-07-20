import * as React from 'react';
import TabbedMonstersView from '../MonstersView/TabbedMonstersView';
import TreasureView from '../TreasureView/TreasureView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainAppBar from '../MainAppBar/MainAppBar';
import HomeView from '../HomeView/HomeView';
import MonsterView from '../MonsterView/MonsterView';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MainAppBar />                    
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/monsters" element={<TabbedMonstersView />} />
                        <Route path="/monster" element={<MonsterView/>} />
                        <Route path="/treasure" element={<TreasureView />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;