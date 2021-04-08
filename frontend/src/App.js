import "./App.css";
import AddUsers from "./components/AddUsers";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div>
          <a>Home</a>
        </div>
        <div>
          <a className="login">Login</a>
        </div>
      </div>
      <Login />
      <AddUsers />
    </div>
  );
}

export default App;
