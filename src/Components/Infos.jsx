import React from 'react'
import styled from 'styled-components';
import photo from "../images/photo2.jpg"

const Section = styled.section`
min-height: 70vh;
display: flex;
justify-content: center;
align-items: center;
background: #fffaf0;
box-sizing: border-box;
margin-bottom: 30px;
`

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
min-height: 70vh;
width: 100%;
// padding: 3rem calc((100vw - 1300px) / 2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 2rem;
background-position: center;
background-repeat: no-repeat;
padding: 0;
background-image: url(${photo});
@media screen and (max-width: 768px) {
    padding: 10rem 0;
}

h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
}
`;

const ColumnRight = styled.div`
display: flex;
color: #131313;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 2rem;
padding: 0;

h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p {
    font-family: cursive;
    margin: 20px;
    font-size: 1.5rem;
    line-height: 1.1;
    text-align: center;
}`;




function Info() {
    return (
        
            <Section id='Infos'>
                <Container>
                   <ColumnLeft>
                        
                    </ColumnLeft>
                    <ColumnRight>
                        <hr  style={{
                           color: '#000000',
                           backgroundColor: '#000000',
                           height: .5,
                           width: 400,
                           borderColor : '#000000'
                        }}/>
                        <h1>Welcome to Space</h1>
                        <p>Journey to the unknown Journey to the unknown Journey to the unknown
                            Journey to the unknown Journey to the unknown
                            Journey to the unknown Journey to the unknown
                            Journey to the unknown Journey to the unknown
                            Journey to the unknown Journey to the unknown</p>
                    </ColumnRight>
                </Container>
            </Section>
        
    )
}

export default Info;
