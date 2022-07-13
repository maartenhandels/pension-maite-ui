import "./App.css";

import ScrollUpArrow from "./components/UI/ScrollUpArrow/ScrollUpArrow";
import NavBar from "./components/NavBar/NavBar";
import PageTop from "./containers/PageTop/PageTop";
import Footer from "./components/Footer/Footer";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
