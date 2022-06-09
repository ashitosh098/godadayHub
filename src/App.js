import logo from "./logo.svg";
import Homepage from "./Components/Home/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import TldsMenu from "./Components/Home/TldsMenu";
import "bootstrap/dist/js/bootstrap.min.js";
import NavigationBar from "./Components/Home/NavigationBar";
import CategoryBox from "./Components/Categories/CategoryBox";

function App() {
  return (
    <>
      <NavigationBar />
      <TldsMenu />
      <CategoryBox />
    </>
  );
}

export default App;
