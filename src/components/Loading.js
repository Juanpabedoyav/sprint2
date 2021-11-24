import React from 'react'
import logoLoad from '../assets/logoLoad.svg'
import { StyleLoad } from '../styles/Loadign.style'

const Loading = () => {
    return (
        <div>
        <StyleLoad>
                <img src={logoLoad} alt="" />   

        </StyleLoad>
        </div>
    )
}

export default Loading
