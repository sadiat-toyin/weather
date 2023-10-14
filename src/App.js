import "./App.css";
//import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <WeatherSearch /> */}
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Sadiat Moshood and is{" "}
          <a
            href="https://github.com/sadiat-toyin/weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://bejewelled-bubblegum-2fc00e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
