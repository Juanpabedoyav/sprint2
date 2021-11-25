import React from 'react'
import logoLoad from '../assets/logoLoad.svg'
import { StyleLoad } from '../styles/Loadign.style'
import { StyleGlobal } from '../styles/Platos.style'

const Loading = () => {
    return (
        <StyleLoad>
        <StyleGlobal/>

                <img src={logoLoad} alt="logo" />   

        </StyleLoad>
    )
}

export default Loading
