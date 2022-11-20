import './styles.scss'
import IconSearch from '../../assets/icons/icon-search.svg'

export default function InputSearch(){
    return(
        <div className='input-search'>
            <input type="text" placeholder='Search a repository' className='input'/>
            <button className='button-search'><img src={IconSearch} alt="Icon Search" /></button>
        </div>
    )
}