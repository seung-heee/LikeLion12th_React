import { useState } from "react";
import Greeting from "./component/conditionalRendering/Greeting";
import UserGreeting from "./component/conditionalRendering/UserGreeting";
import GuestGreeting from "./component/conditionalRendering/GuestGreeting";
import CollegeList from "./component/arrayRendering/CollegeList";

function App() {
  const [yes, setYes] = useState();

  return (
    <div className="App">
      <CollegeList />
    </div>
  );
}

export default App;