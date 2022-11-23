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
  const [amountRepositories, setAmountRepositories] = useState(0)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    searchRepository(keyword, pageCurrently)
    console.log(pageCurrently)
  }, [pageCurrently])


  function updatePage(page){
    setPageCurrently(page)
  }

  function searchRepository(keywordInput, page){
    if(keyword !== keywordInput) {setKeyword(keywordInput)}

    axios
      .get(`https://api.github.com/search/repositories?q=${keywordInput}&per_page=5&page=${page}`)
      .then((response) => {setListRepository(response.data.items) ; setAmountRepositories(response.data.total_count); console.log(response.data)})
      .catch((error) => console.log('Error: ', error));
  }

  return (
    <main>
      <InputSearch searchRepository={searchRepository} />

      <div className="container">
        <CardLanguages list={listRepository} />
        <div className='repos'>
          <ListRepository list={listRepository} updatePage={updatePage} amountRepositories={amountRepositories}/>
          <Pagination quantityRepo={1000} perPage={5} updatePage={updatePage} />
        </div>

      </div>
    </main>
  )
}

export default App
