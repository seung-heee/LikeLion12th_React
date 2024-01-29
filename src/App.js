import Aside from "./component/simantic/Aside";
import Footer from "./component/simantic/Footer";
import Header from "./component/simantic/Header";
import Nav from "./component/simantic/Nav";
import Section from "./component/simantic/Section";

function App() {
  const name = '홍길동'
  const food = '홍길동전'

  return (
    <div className="App">
      {/* 코드 조각 모음 */}
      <Header />
      <Nav />
      <Section name={name} food={food}/>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
