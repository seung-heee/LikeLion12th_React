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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('홍길동')
  const [studentId, setStudentId] = useState(24)

  return (
    <Greeting isLoggedIn={isLoggedIn} name={name} studentId={studentId}  />
  );
}

export default App;
