import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./screens/landingpage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Landingpage/>} />
      </Routes>
    </Router>

  );
};

export default App;
