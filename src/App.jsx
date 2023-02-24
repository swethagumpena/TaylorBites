import "./App.css";
import banner from "./assets/banner.png";

const App = () => {
  return (
    <div className="App">
      <img className="bannerImg" src={banner} />
      <h1 class="title">Taylor bites 🍲</h1>
      <h2>
        Welcome! View your favorite restaurants of Taylor Street in one place
      </h2>
    </div>
  );
};

export default App;
