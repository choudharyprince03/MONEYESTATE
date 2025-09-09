import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./screens/landingpage";
import Feature from "./screens/feature";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Landingpage/>} />
        <Route path="/Feature" element = {<Feature/>} />
      </Routes>
    </Router>

  );
};

export default App;
