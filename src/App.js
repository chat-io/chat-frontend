import "./App.css";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Chat />
    </div>
  );
}

export default App;
