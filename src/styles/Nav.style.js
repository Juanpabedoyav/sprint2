import styled from 'styled-components'
 
export const StyleNav = styled.nav`
color: black;
/* margin: 0 auto; */
height: 32px;
display: flex;
flex-direction: row;
margin: 24px 0px;
align-items: flex-start;
justify-content: space-evenly;
/* padding: 0px 24px; */
/* border: 1px solid red; */
a{
    font-size: 1rem;
    font-weight: 400;
    text-decoration:'none';
    color: #9A9A9D;
    &:focus{
        color:#FA4A0C;
            
     } 
 
}
 li{
    list-style:none;
    padding-bottom: 8px;
    border-bottom: 5px solid transparent;
}
   
`
