import './styles.scss'
import IconStar from '../../assets/icons/icon-star.svg'
import IconLang from '../../assets/icons/icon-language.svg'
import IconIssues from '../../assets/icons/icon-issues.svg'
import IconFork from '../../assets/icons/icon-fork.svg'
import { useEffect, useState } from 'react'

export default function ListRepository({list}){
    
    const [listRepository, setListRepository] = useState(list)

    useEffect(() => {
        setListRepository(list)
    }, [list])

    return(
        <section className='list-repository'>
            <div className='title'>Showing {listRepository && listRepository.total_count} available repositor results</div>

            <div className='list'>

                {listRepository && listRepository.items.map((item, index) => {


                    let topics = []
                    for (let i = 0; i < item.topics.length; i++) {
                        topics.push(<div className='topic'>{item.topics[i]}</div>)
                    }

                    return(

                        <div className='repository' key={index}>
                            <h3 className='title-repo'>{item.full_name}</h3>
                            <p className='description'>{item.description}</p>
                            <div className='topics'>
                                {topics}
                            </div>

                            <div className='footer-repo'>
                                <div className='item-footer count-star'>
                                    <img src={IconStar} alt="Icon Star" />
                                    <p>{item.stargazers_count}</p>
                                </div>
                                <div className='item-footer language'>
                                    <img src={IconLang} alt="Icon Language" />
                                    <p>{item.language}</p>
                                </div>
                                <div className='item-footer count-issues'>
                                    <img src={IconIssues} alt="Icon Issues" />
                                    <p>{item.open_issues_count} issues</p>
                                </div>
                                <div className='item-footer count-forks'>
                                    <img src={IconFork} alt="Icon Forks" />
                                    <p>{item.forks_count} forks</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {!list && <div>AQUI</div>}
            </div>

        </section>
    )
}