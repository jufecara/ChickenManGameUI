import "./App.scss";
import { TeamCard } from "./components/TeamCard";

function App() {
  return (
    <div className="App">
      <div className="font-bold text-2xl text-center p-4">Game Dashboard</div>
      <div className="score flex flex-row p-2 w-full gap-2 text-white items-center h-48">
        <TeamCard teamName="red" points={0} />
        <TeamCard teamName="green" points={0} />
        <TeamCard teamName="blue" points={0} />
      </div>
    </div>
  );
}

export default App;
