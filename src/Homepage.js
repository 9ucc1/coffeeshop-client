import React from 'react'
import styled from 'styled-components'

function Homepage(){

    const Background = styled.div`
    background: white;
    padding-top: 100px;
`;
const Wrapper = styled.p`
    padding: 1em;
    background: beige;
    margin-left: 20%;
    margin-right: 20%;
    font-family: "Courier New", monospace;
    font-weight: bold;
`;


    return (
        <Background>
        <Wrapper>
            A collection of coffee shops with interesting novelty drinks!
            <br></br>
            Keep track of the interesting drinks you've tried and rate how you felt about it.
        </Wrapper>
        </Background>
    )
}

export default Homepage