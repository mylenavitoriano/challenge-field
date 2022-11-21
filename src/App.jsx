import './styles/App.scss'
import CardLanguages from "./components/CardLanguages"
import InputSearch from "./components/InputSearch"
import ListRepository from "./components/ListRepository"

import axios from 'axios'
import { useState } from 'react'

function App() {

  const [listRepository, setListRepository] = useState()

  function searchRepository(keyword){
    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}&per_page=5&page=1`)
      .then((response) => {setListRepository(response.data) ;console.log(response.data)})
      .catch((error) => console.log('Error: ', error));
  }

  return (
    <main>
      <InputSearch searchRepository={searchRepository} />

      <div className="container">
        <CardLanguages />
        <ListRepository list={listRepository}/>
      </div>
    </main>
  )
}

export default App
