import { useState } from 'react'
import './styles.scss'

export default function CardLanguages({list}){

    const [languages, setLanguages] = useState(
        [
            {
                "lang": "JavaScript",
                "quantity": 345
            },
            {
                "lang": "C#",
                "quantity": 150
            },
            {
                "lang": "HTML",
                "quantity": 80
            },
        ]
    )

    

    return(
        <section className='card-languages'>
            <div className='title'>Languages</div>

            {list && list.map((item, index) => {
                console.log(item)

                return(
                    <div>{item}</div>
                )
            })}

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