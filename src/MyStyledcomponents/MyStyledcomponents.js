import styled from "styled-components";


const Container = styled.div`
    width:100%;
    min-height:100vh;
    position:relative;
`

const Output = styled.div`

display:flex;
min-height:100vh;

justify-content:center;
align-items:center;
`

const Card = styled.div`
text-align:center;
    width:80%;
    height: 80%;
    padding:24px;
    border-radius:16px;
    border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`





export { Container, Output, Card }