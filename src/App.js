import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!!! </h1>
        <WeatherSearch />
        <footer>
          This project was created by Sadiat Moshood and is {""}
          <a
            href="https://github.com/sadiat-toyin/weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source on Github
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
