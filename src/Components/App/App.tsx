import * as React from 'react';
import Menu from '../Menu/Menu';
import MonsterTable from '../MonsterTable/MonsterTable';


class App extends React.Component {
  render() {
    return (
    <div>
      <h1>חרבות וכשפים</h1>
      <Menu />
      <br></br>
      <MonsterTable />
    </div>
    );
  }
}

export default App;