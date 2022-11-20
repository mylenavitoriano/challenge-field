import './styles/App.scss'
import CardLanguages from "./components/CardLanguages"
import InputSearch from "./components/InputSearch"
import ListRepository from "./components/ListRepository"

function App() {

  return (
    <main>
      <InputSearch />

      <div className="container">
        <CardLanguages />
        <ListRepository />
      </div>
    </main>
  )
}

export default App
