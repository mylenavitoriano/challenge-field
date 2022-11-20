import './styles.scss'
import IconStar from '../../assets/icons/icon-star.svg'
import IconLang from '../../assets/icons/icon-language.svg'
import IconIssues from '../../assets/icons/icon-issues.svg'
import IconFork from '../../assets/icons/icon-fork.svg'

export default function ListRepository(){
    return(
        <section className='list-repository'>
            <div className='title'>Showing 1.444.444 available repositor results</div>

            <div className='list'>
                <div className='repository'>
                    <h3 className='title-repo'>nodejs/node</h3>
                    <p className='description'>Node.js JavaScript runtime</p>
                    <div className='topics'>
                        <div className='topic'>node</div>
                        <div className='topic'>windows</div>
                    </div>

                    <div className='footer-repo'>
                        <div className='item-footer count-star'>
                            <img src={IconStar} alt="Icon Star" />
                            <p>91.6k</p>
                        </div>
                        <div className='item-footer language'>
                            <img src={IconLang} alt="Icon Language" />
                            <p>JavaScript</p>
                        </div>
                        <div className='item-footer count-issues'>
                            <img src={IconIssues} alt="Icon Issues" />
                            <p>66 issues</p>
                        </div>
                        <div className='item-footer count-forks'>
                            <img src={IconFork} alt="Icon Forks" />
                            <p>24.7k forks</p>
                        </div>
                    </div>
                </div>
                
                <div className='repository'>
                    <h3 className='title-repo'>nodejs/node</h3>
                    <p className='description'>Node.js JavaScript runtime</p>
                    <div className='topics'>
                        <div className='topic'>node</div>
                        <div className='topic'>windows</div>
                    </div>

                    <div className='footer-repo'>
                        <div className='item-footer count-star'>
                            <img src={IconStar} alt="Icon Star" />
                            <p>91.6k</p>
                        </div>
                        <div className='item-footer language'>
                            <img src={IconLang} alt="Icon Language" />
                            <p>JavaScript</p>
                        </div>
                        <div className='item-footer count-issues'>
                            <img src={IconIssues} alt="Icon Issues" />
                            <p>66 issues</p>
                        </div>
                        <div className='item-footer count-forks'>
                            <img src={IconFork} alt="Icon Forks" />
                            <p>24.7k forks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}