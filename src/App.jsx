import './styles/App.scss'
import CardLanguages from "./components/CardLanguages"
import InputSearch from "./components/InputSearch"
import ListRepository from "./components/ListRepository"

import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from './components/Pagination'

function App() {

  const [listRepository, setListRepository] = useState()
  const [pageCurrently, setPageCurrently] = useState(1)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    searchRepository(keyword)
    console.log("AQUI")
  }, [pageCurrently])


  function updatePage(page){
    setPageCurrently(page)
  }

  function searchRepository(keywordInput){
    if(keyword !== keywordInput) {setKeyword(keywordInput)}

    axios
      .get(`https://api.github.com/search/repositories?q=${keywordInput}&per_page=5&page=${pageCurrently}`)
      .then((response) => {setListRepository(response.data) ;console.log(response.data)})
      .catch((error) => console.log('Error: ', error));
  }

  return (
    <main>
      <InputSearch searchRepository={searchRepository} />

      <div className="container">
        <CardLanguages />
        <div className='repos'>
          <ListRepository list={listRepository} updatePage={updatePage} />
          <Pagination quantityRepo={100} perPage={10} updatePage={updatePage} />
        </div>

      </div>
    </main>
  )
}

export default App
