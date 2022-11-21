import './styles.scss'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'

export default function Pagination ({quantityRepo, perPage}) {

    const [pageSelect, setPageSelect] = useState(1)

    let quantityPages = Math.ceil(quantityRepo / perPage)
    const maxVisibleButtons = 5

    let numbers = []
    for (let i = 1; i < quantityPages + 1; i++) {
        numbers.push(i)
    }

    // tempo vídeo - 1:01:40
    function viewNumbers(number){
        let maxLeft = (pageSelect = Math.floor(maxVisibleButtons / 2))
        let maxRight = (pageSelect + Math.floor(maxVisibleButtons / 2))

        if(maxLeft < 1){
            maxLeft = 1
            maxRight = maxVisibleButtons
        }

        if(maxRight > quantityPages){
            maxLeft = quantityPages - (maxVisibleButtons - 1)
            maxRight = quantityPages
        }

        return {maxLeft, maxRight}
    }


    return(
        <div className='pagination'>
            <div className='button-back'><CaretLeft size={28} color={"#FFF"}/></div>
            <div className='numbers'>
                {numbers.map((item, index) => {
                    if(item == pageSelect){
                        return(
                            <div className='active'>{item}</div>
                        )
                    }else{
                        return(
                            <div>{item}</div>
                        )
                    }
                })}
            </div>
            <div className='button-next'><CaretRight size={28} color={"#FFF"}/></div>
        </div>
    )
}