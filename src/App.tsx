import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
