import styled from 'styled-components'

export const StyleForm = styled.form`
margin-left: 8px;
height: 1250px;
.volver{
  font-size: 2rem;
  text-decoration: none;
  color:black;
}
.combo{
    /* border: 1px solid red; */
    padding: 5px;
    margin: 5px;
    display: inline-block;
      width: 152px;
      height: 138px;
    text-align: left;
    border-radius: 20px;
      background-color: #FFFF;

}
[type="checkbox"]{
    position: relative;
    left: 120px;
    bottom: 60px;
    /* border: 1px solid black; */
    
}
.sabor-principal{
  font-size: 1.4rem;
    color:black;
    font-weight: 800;
    text-transform: uppercase;
} 
.precio-principal{
  font-size: 1.2rem;
    color:#FA4A0C;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 10px; 
}  
.nombre{
    font-size:1rem;
    font-weight: 600;
    color:#0D0D0D;
    margin-bottom: 8px;
}
.precio{
    font-size: .9rem;
    color:#FA4A0C;
    font-weight: 600;
    text-transform: uppercase;
}
.botton{
  width:312px;
  height: 69px;
  border-radius: 40px;
  display:block;
  margin: 0 auto;
  background-color:#FA4A0C;
  border: none;
  font-weight: 600;
  font-size:1rem;
  color: #FFFF;
  margin-top: 40px;
  position: fixed;
  bottom: 30px;

}
.copy-combo{
  color: #0d0d0d90;
  font-weight: 400;
  font-size:0.9rem;
  width: 300px;
  margin: 8px 0px 20px 15px;
}
h3{
font-size: 1.2rem;
font-weight: 600;
margin-left: 15px;
}
.imgen-principal{
  /* border: 1px solid red; */
  margin : 0 auto;
  text-align: center;
  .img{
  /* border: 1px solid red; */
  height: 120px;
  width: 120px;
}
}
.car{
    width: 28px;
    height: 28px;
    color:#9A9A9D;
    /* border: 1px solid red; */
  position: relative;
  left: 270px;
  top: 5px;
  } 

`




export const StyleSabor = styled.div`
/* border: 1px solid red; */
.titulo{
  font-size: 1.2rem;
font-weight: 600;
margin-left: 15px;
}
.flavors{
/* border: 1px solid red; */
margin: 20px 0;
display:flex;

flex-wrap: wrap;

img{
opacity:0.3;

  margin-left: 30px;
  margin-top: 10px;

}
.opa{
  opacity:1; 
margin-left: 30px;
margin-top: 10px;
}


}
`