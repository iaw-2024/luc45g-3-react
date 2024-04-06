import Header from "./Header";
import List from "./List";
import './extras.css';

function App() {
  return (
    <div className="flex flex-col vw-75 rounded border border-gray-400 shadow-lg p-6 bg-white">
      <Header></Header>

      <div className="flex w-full border border-t-2 border-t-black"></div>

      <List></List>
    </div>
    
  );
}

export default App;
