import HomePage from "./components/Home/Homepage";
import "./themes/themes.css";

document.documentElement.setAttribute("data-theme", "dark"); // set default theme to dark

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
