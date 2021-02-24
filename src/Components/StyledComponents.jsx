import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 50%;
    background: darkblue;
    margin: 0 auto;
    padding: 10px;
`

const Title = styled.h2`
    text-align:center;
    color:white;
`

const Text = styled.p`
    color:white;
    text-align:center;
`

export default function StyledComponents() {
    return (
        <div>
            <h1>Styled Components</h1>
            <Container>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Text>
            </Container>
        </div>
    )
}
