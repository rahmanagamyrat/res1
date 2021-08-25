import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 80vh;
padding: 3rem calc((100vw - 1300px) / 2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`;

const ColumnRight = styled.div``;



function Cons() {
    return (
        
            <Section id='cons'>
                <Container>
                    <ColumnLeft>
                        <h1>Welcome to Space</h1>
                        <p>Journey to the unknown</p>
                    </ColumnLeft>
                    <ColumnRight>
                       Filter
                    </ColumnRight>
                </Container>
            </Section>
        
    )
}

export default Cons;
