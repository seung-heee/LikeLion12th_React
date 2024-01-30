import Event from "./component/Event";
import Counter from "./component/state/Counter";
import Input from "./component/state/Input";
import Aside from "./component/simantic/Aside";
import Footer from "./component/simantic/Footer";
import Header from "./component/simantic/Header";
import Nav from "./component/simantic/Nav";
import Section from "./component/simantic/Section";
import Greeting from "./component/conditionalRendering/Greeting";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Greeting isLoggedIn={isLoggedIn} />
  );
}

export default App;
