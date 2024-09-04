import "./App.css";
import * as Component from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Component.HelloWorld message="hello world" />}
          />
          <Route
            path="/about"
            element={<Component.HelloWorld message="about page" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
