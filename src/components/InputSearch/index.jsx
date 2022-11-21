import './styles.scss'
import IconSearch from '../../assets/icons/icon-search.svg'
import { useState } from 'react'

export default function InputSearch({searchRepository}){

    const [keyword, setKeyword] = useState("")

    function search(){
        searchRepository(keyword)
    }

    return(
        <div className='input-search'>
            <input type="text" placeholder='Search a repository' className='input' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <button className='button-search' onClick={search}><img src={IconSearch} alt="Icon Search" /></button>
        </div>
    )
}