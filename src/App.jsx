import "./App.css";
import banner from "./assets/banner.png";
import Card from "./components/Card/Card";
import restaurants from "./data/restaurants";

const App = () => {
  return (
    <div className="App">
      <img className="bannerImg" src={banner} />
      <h1 class="title">Taylor bites 🍲</h1>
      <h2>
        Welcome! View your favorite restaurants of Taylor Street in one place
      </h2>
      <div className="items">
        {restaurants.map((restaurant) => {
          return (
            <Card
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              image={restaurant.image}
              link={restaurant.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
