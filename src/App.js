import './App.css';
import Ipl from './components/ipl.js'
import Moose from './components/moose.js'
import List from './components/list.js'
function App() {
  return (
    <div className="App">
      <Ipl></Ipl>
      <Moose></Moose>
      <List></List>
    </div>
  );
}

export default App;