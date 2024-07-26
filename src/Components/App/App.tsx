import * as React from 'react';
import TabbedMonstersView from '../Monsters/TabbedMonstersView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainAppBar from './MainAppBar';
import HomeView from '../HomeView/HomeView';
import MonsterView from '../Monsters/MonsterView/MonsterView';
import TabbedTreasureView from '../Treasure/TabbedTreasureView';
import AboutView from '../About/AboutView';
import TabbedMagicView from '../Magic/TabbedMagicView';
import MagicView from '../Magic/MagicTable/MagicView';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MainAppBar />                    
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/swordsAndWizardry" element={<HomeView />} />
                        <Route path="/monsters" element={<TabbedMonstersView />} />
                        <Route path="/monster" element={<MonsterView/>} />
                        <Route path="/treasure" element={<TabbedTreasureView />} />
                        <Route path="/magics" element={<TabbedMagicView />} />
                        <Route path="/magic" element={<MagicView />} />
                        <Route path="/about" element={<AboutView />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;