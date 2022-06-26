import "./App.css";

import ScrollUpArrow from "./components/UI/ScrollUpArrow/ScrollUpArrow";
import NavBar from "./components/NavBar/NavBar";
import PageTop from "./containers/PageTop/PageTop";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Location from "./pages/Location/Location";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  return (
    <div className="App">
      <ScrollUpArrow />
      <NavBar />
      <PageTop>
        <Rooms />
        <Footer />
      </PageTop>
    </div>
  );
}

export default App;
