import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./screens/landingpage";
import Listings from "./screens/Listings";
import Contact from "./screens/Contact";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element = {<Landingpage/>} />
            <Route path="/listings" element = {<Listings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Layout>
    </Router>

  );
};

export default App;
