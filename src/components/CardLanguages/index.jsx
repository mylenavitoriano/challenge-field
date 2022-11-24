import { useEffect, useState } from 'react'
import './styles.scss'

export default function CardLanguages({list}){
    
    const [repositories, setRepositories] = useState(list)
    let languages = []

    useEffect(() => {
        setRepositories(list)
        verificaLinguagem()
        
    }, [list])    

    function verificaLinguagem(){
        if(repositories !== undefined){
            repositories.map((item, index) => {
                let objLanguage = languages.find(({lang}) => lang == item.language)
                
                if(objLanguage !== undefined){
                    for(let i = 0; i < languages.length; i++){
                        if(languages[i].lang == objLanguage.lang){
                            languages[i] = {'lang': objLanguage.lang, 'total': (objLanguage.total + 1)}
                        }
                    }
                }else{
                    languages.push({'lang': item.language, 'total': 1})
                }
            })
        }
    }

    return(
        <section className='card-languages'>
            <div className='title'>Languages</div>

            <div className='list-languages'>
                {languages.length !== 0 && languages.map((item, index) => {
                    console.log(item)

                    return(
                    <p className='item' key={index}>
                        {item.lang}
                        <span>{item.total}</span>
                    </p>)
                })}
            </div>
        </section>
    )
}