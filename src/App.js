import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Project from "./pages/Project";
import About from "./pages/About";
import Effect from "./component/Effect";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/effect' element={<Effect />} />
      </Routes>
    </div>
  );
}

export default App;