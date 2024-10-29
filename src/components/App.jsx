import MonstersContainer from './MonstersContainer'
import FavoriteMonstersContainer from './FavoriteMonstersContainer'

function App() {

  return (
    <div className="App">

      <h1>MONSTERS!</h1>

      <div className="two-columns">

        <MonstersContainer />

        <FavoriteMonstersContainer />

      </div>


    </div>
  )
}

export default App
