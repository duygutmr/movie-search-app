import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import SearchResults from './pages/SearchResults'
import MovieDetails from './pages/MovieDetails'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/search-results" component={SearchResults} />
        <Route path="/movie-details/:imdbId" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
