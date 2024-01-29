import Aside from "./component/simantic/Aside";
import Footer from "./component/simantic/Footer";
import Header from "./component/simantic/Header";
import Nav from "./component/simantic/Nav";
import Section from "./component/simantic/Section";

function App() {
  return (
    <div className="App">
      {/* 코드 조각 모음 */}
      <Header />
      <Nav />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
