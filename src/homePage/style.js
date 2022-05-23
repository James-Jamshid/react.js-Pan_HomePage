import styled from 'styled-components';
import rectangle from '../assets/img/Rectangle.png'


export const Container = styled.div`
display: flex;
flex-direction: column;

`
export const Wrapper = styled.div`
background:#F0EEDD;
height:40px;
display: flex;
align-items: center;
justify-content: center;


    
`
Wrapper.Middle = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 82px;

 
 `
export const Title = styled.div`    
text-transform: uppercase;
color: #670A18;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
`
export const MenuCon = styled.div`
cursor: pointer;
display: flex;
align-items: center;
font-size: 13px;
color: black;
p{
  margin: 10px;
  color: black;
}
p#profil{
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#cb7550;
    color: white;
    
}
p:hover{
  color: #76442e;
  transition: all 0.1 ease;
  transform: scale(1.1);

}

`



export const Logo = styled.div`
font-size: 32px;
cursor: pointer;
p{
  color: black;
}
p:hover{
transform: scale(1.1);
color: #76442e;
transition: all 0.1 ease;

}

`
export const Main = styled.div`
background-image: url(${rectangle});
display: flex;
align-items: center;
padding-left: 30vw;
width: 100%;
height: 600px;
background-repeat: no-repeat;

`
Main.Inner = styled.div`
color: #372b25;
button{  
    cursor: pointer;
    border: none;
    width: 15vw;
   height: 40px;
   background-color: #cb7550;
    box-shadow: 0 0 5px #000;
}
button:hover{
    background-color: #76442e;
  transition: all 0.1 ease;
}
`
export const Logos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
background-color: #F5F1E9;
height: 212px;
`
Logos.Log = styled.img`
`
Logos.Title = styled.div`
color: #372b25;
text-align: center;
text-transform: uppercase;

`
Logos.MainLog = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
cursor: pointer;


`


export const Welcome = styled.div`
background-color: #FCFAF6;
display: flex;
align-items: center;
height: 200px;
justify-content: space-evenly;
h1{
    text-align: center;
}

`
export const PanDesign = styled.div`
background-color: #FCFAF6;
text-transform: uppercase;
font-size: xx-small;
height: 120vh;

`
PanDesign.Inner = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 25px;
`
PanDesign.InnerP1 = styled.div`
position: absolute;
top: 94vw;
left: 20vw;

`
PanDesign.InnerP2 = styled.div`
position: absolute;
top: 90vw;
left: 62vw;

`
PanDesign.InnerP3 = styled.div`
position: absolute;
top: 113vw;
left: 32vw;

`
PanDesign.InnerP4 = styled.div`
position: absolute;
top: 105vw;
left: 60vw;

`
PanDesign.InnerP5 = styled.div`
position: absolute;
top: 121vw;
left: 23vw;

`
PanDesign.InnerP6 = styled.div`
position: absolute;
top: 119vw;
left: 63vw;

`
PanDesign.Img = styled.img`
`
PanDesign.Img1 = styled.div`
`
PanDesign.Img2 = styled.div`
padding-left: 10vw;
`
export const OtherTypes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:#FCFAF6;

`
export const Frame2 = styled.img`
`
export const FooterCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #F5F1E9;
text-align: center;
p{
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-small;
}
h6{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: larger;
}
button{  
    cursor: pointer;
    border: none;
    width: 15vw;
   height: 40px;
   background-color: white;
    box-shadow: 0 0 5px #000;
}
button:hover{
    background-color: #76442e;
  transition: all 0.1 ease;
}
`
export const LeftSide = styled.img`
`
export const MIddleSide = styled.div`
`
export const RightSide = styled.img`
`



export const FooterMain = styled.div`
display: flex;
background-color:#6C674D;
height: 579px;
`
export const FooterLeft = styled.div`
display: flex;
flex-direction: column;
padding: 48px;
gap: 20px;
flex: 1;
padding-top: 80px;
p{
  color: white;
}


`
export const FooterLeftImg = styled.img`
width: 180px;
`

FooterLeft.Mail = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
width: 450px;
height: 50px;
background-color: white;

input{
  width: 350px;
  height: 44px;
  padding-left: 20px;
  color: black;
  font-size: 14px;

}
button{
  border: none;
  background-color: white;
  width: 100px;
  height: 50px;
  cursor: pointer;

}
button:hover{
    background-color:#f4f5f3;
  transition: all 0.1 ease;
}
`
export const FooterRight = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap: 20px;
`
FooterRight.Buttons = styled.div`
display: flex;
flex-direction: row;
padding-top: 80px ;
justify-content: center;
justify-content: space-evenly;
cursor: pointer;
h6{
  color: #F5F1E9;;
 
}
p{
  color:  rgba(245, 241, 233, 0.6);;
 
}
h6:hover{
  color:#dbded8;
  transition: all 0.1 ease;
 
  transform: scale(1.1);
  
}
p:hover{
  color:#dbded8;
  transition: all 0.1 ease;
  transform: scale(1.1);

}
`
FooterRight.Shop = styled.div`
`
FooterRight.Company = styled.div`
`
FooterRight.Social = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
a{
  text-decoration: none;
  color:  rgba(245, 241, 233, 0.6);;
 

}
a:hover{
  color:#dbded8;
  transition: all 0.1 ease;
  transform: scale(1.1);

}
`
FooterRight.Flags = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 13vh;
p{
  color: #F5F1E9;
}
`
FooterRight.Flags.Inner = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`

export const Frame4 = styled.img`
cursor: pointer;
`
export const Frame3 = styled.img`
cursor: pointer;
`
export const FooterLast=styled.div`
display: flex;
background-color:  #807C62;
height: 74px;
color: #FCFAF6;
color: black;
p{
  color: #F5F1E9;
}
p:hover{
  color:#dbded8;
  transition: all 0.1 ease;
  transform: scale(1.1);

}
`
FooterLast.Left=styled.div`
display: flex;
flex: 1;
padding-left: 48px;
align-items: center;
cursor: pointer;

`
FooterLast.Right=styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
align-items: center;
padding-right: 48px;
gap: 50px;
cursor: pointer;
a{
  text-decoration: none;
  color: black;
}
`
export const Wheelchair=styled.div`
display: flex;
border: 1px solid black;
width: 80px;
height: 20px;
border-radius: 5px;
align-items: center;
justify-content: center;
background-color: #FCFAF6;
cursor: pointer;

`
export const Wheel=styled.img`

`