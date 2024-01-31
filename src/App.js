import Greeting from "./component/conditionalRendering/Greeting";
import { useState } from "react";
import './css/styles.css'
import Ref from "./component/Ref";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [name, setName] = useState('홍길동')
  const [studentId, setStudentId] = useState(24)

  return (
      <Ref />
    );
}

export default App;
