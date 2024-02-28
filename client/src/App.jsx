import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import "./App.css";
// VIEWS
import Landing from "./views/landing/Landing";
import About from "./views/About/About";
// import CreateActivity from "./views/form-page/CreateActivity"
import Home from "./views/Home/Home";
import Details from "./views/Details/Details";

// import Details from './views/details/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details" element={<Details />} />
        {/*  <Route exact path='/create-activity' element={<CreateActivity />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
