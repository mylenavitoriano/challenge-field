import './styles.scss'

export default function CardLanguages(){
    return(
        <section className='card-languages'>
            <div className='title'>Languages</div>

            <div className='list-languages'>
                <p className='item'>
                    JavaScript
                    <span>943.656</span>
                </p>

                <p className='item'>
                    HTML
                    <span>943.656</span>
                </p>

                <p className='item'>
                    CSS
                    <span>943.656</span>
                </p>

                <p className='item'>
                    C#
                    <span>943.656</span>
                </p>
            </div>
        </section>
    )
}