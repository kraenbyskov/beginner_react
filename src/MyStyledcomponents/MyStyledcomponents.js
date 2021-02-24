import styled from "styled-components";


const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`

const Output = styled.div`
background:#2e3a4d;
display:flex;
justify-content:center;
align-items:center;
`

const Card = styled.div`
    min-width:50%;
    background:white;
    padding:24px;
    border-radius:16px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`


const CodeViewe = styled.div`
background:#2e3a4d;
display:flex;
justify-content:center;
align-items:center;
h3 {
    color:white;
}

`



export { Container, Output, CodeViewe, Card }