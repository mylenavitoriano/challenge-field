import './styles.scss'

import { CaretLeft, CaretRight, CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function Pagination ({quantityRepo, perPage, updatePage}) {
    
    const [pageSelect, setPageSelect] = useState(1)

    // useEffect(() => {
    //     updateButtons()
    // }, [])

    useEffect(() => {
        updatePage(pageSelect)
    }, [pageSelect])


    // quantidade de páginas
    let quantityPages = Math.ceil(quantityRepo / perPage)
    // // quantidade máxima de botões visiveis
    // const maxVisibleButtons = 5

    
    // function updateButtons(){
    //     document.querySelector('.pagination #buttons-number').innerHTML = ""
    //     const { maxLeft, maxRight } = viewNumbers()
    //     console.log(maxLeft, maxRight)
        
    //     for (let page = maxLeft; page <= maxRight; page++) {
    //         createButtons(page)
    //     }
    // }

    // function clickButton(event){
    //     const page = event.target.innerText
    //     controls.goTo(page)

    //     updatePage(pageSelect)
    // }

    // function createButtons(number){
    //     const button = document.createElement('div')
    //     button.innerHTML = number

    //     if(pageSelect == number){
    //         button.classList.add('active')
    //     }

    //     const listButtons = document.querySelector('.pagination #buttons-number')
    //     listButtons.appendChild(button)
    //     listButtons.addEventListener('click', () => clickButton(event))
    // }

    function viewNumbers(){
        let maxLeft = (pageSelect - Math.floor(maxVisibleButtons / 2))
        let maxRight = (pageSelect + Math.floor(maxVisibleButtons / 2))

        if(maxLeft < 1){
            maxLeft = 1
            maxRight = maxVisibleButtons
        }

        if(maxRight > quantityPages){
            maxLeft = quantityPages - (maxVisibleButtons - 1)
            maxRight = quantityPages

            if(maxLeft < 1){
                maxLeft = 1
            }
        }

        return {maxLeft, maxRight}
    }

    const controls = {
        next(){
            
            if(pageSelect > quantityPages){
                setPageSelect(pageSelect - 1)
            }else if(pageSelect == quantityPages){
                setPageSelect(quantityPages)
            }else{
                setPageSelect(pageSelect + 1)
            }

        },
        prev(){
            
            if(pageSelect < 1){
                setPageSelect(pageSelect + 1)
            }else if(pageSelect == 1){
                setPageSelect(1)
            }else{
                setPageSelect(pageSelect - 1)
            }
        },
        goTo(page){
            if(pageSelect < 1){
                setPageSelect(1)
            }

            setPageSelect(+page)

            if(page > quantityPages){
                setPageSelect(quantityPages)
            }
        }
    }


    return(
        <div className='pagination'>
            <div className='buttons-left'>
                <div className='button' onClick={() => controls.goTo(1)}><CaretDoubleLeft  size={20} color={"#FFF"}/>First Page</div>
                <div className='button' onClick={() => controls.prev()}><CaretLeft size={20} color={"#FFF"}/>Next</div>
            </div>
            <div className='buttons-right'>
                <div className='button' onClick={() => controls.next()}>Prev<CaretRight size={20} color={"#FFF"}/></div>
                <div className='button' onClick={() => controls.goTo(quantityPages)}>Last Page<CaretDoubleRight  size={20} color={"#FFF"}/></div>
            </div>
        </div>
    )
}