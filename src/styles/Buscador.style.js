import styled from 'styled-components'


export const  StyledInput = styled.input`
background:#E7E7E7;
display:block;
margin: 0 auto;
width: 210px;
height: 60px;
border: none;
border-radius: 30px;
/* text-align: le; */
padding-left:50px;
font-size: 1rem;
font-weight: 400;
`
export const  StyledCaja = styled.div`
.busqueda{
    position:relative;
    font-size: 1.3rem;
    bottom: 40px;
    left: 55px;
    color:#9A9A9D;
}
`

export const StyleBuscador = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: row;
margin-top: 30px;
padding: 0 10px;
justify-content: space-around;
align-items: center;
.cancel{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
`