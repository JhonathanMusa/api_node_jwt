import "./App.css";
import AddUsers from "./components/AddUsers";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <a>Home</a>
        <a className="login">Login</a>
      </div>
      <Login />
      <AddUsers />
    </div>
  );
}

export default App;
