import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Chat from "./components/Chat/Chat";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route render={() => <h1>404 page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
