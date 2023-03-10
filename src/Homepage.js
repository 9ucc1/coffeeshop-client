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
    const Link = styled.p`
    font-family: "Courier New", monospace;
    font-weight: bold;
    `;

    return (
        <Background>
        <Wrapper>
            A collection of coffee shops with interesting novelty drinks!
            <br></br>
            Discover your next favorite drink or add something you've enjoyed recently.
        </Wrapper>
        <Link>
            <a href="https://github.com/9ucc1/coffeeshop-client">GitHub repo here</a>
        </Link>
        </Background>
    )
}

export default Homepage