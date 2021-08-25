import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Section = styled.section`
min-height: 30vh;
display: flex;
justify-content: center;
align-items: center;
background: #fffaf0;
box-sizing: border-box;
margin-bottom: 30px;
`

const Container = styled(motion.div)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
min-height: 30vh;
width: 100%;
// padding: 3rem calc((100vw - 1300px) / 2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

/* const ColumnLeft = styled(motion.div)`
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
`; */

const ColumnRight = styled(motion.div)`
display: flex;
color: #131313;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 2rem;
padding: 0;

h1 {
    margin: 10px 0px ;
    font-size: 2rem;
}

p {
    margin: 5px 60px;
    font-size: 1.5rem;
    line-height: 1.1;
    text-align: center;
    font-style: oblique;
}`;

const SocialIconLink = styled.a`
`;



function Info() {
    return (
        
            <Section id='Info'>
                <Container>
                    <ColumnRight>
                        <h1>Our address</h1>
                        <p>
                          Esat caddesi 34/3
                        </p>
                        <p> </p>
                        <p></p>
                    </ColumnRight>
                    <ColumnRight>
                        <h1>Our Telephone</h1>
                        <p>
                          +565659995
                        </p>
                        <p></p>
                        <p></p>
                    </ColumnRight>
                    <ColumnRight>
                        <h1>Our Socials</h1>
                        <SocialIconLink href='https://www.instagram.com/seyran.aman/?hl=en'
                        target="_blank"
                        ><p>Instagram</p></SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/iamseyran/?hl=en'
                        target="_blank"
                        ><p>Facebook</p></SocialIconLink>
                    </ColumnRight>
                </Container>
            </Section>
        
    )
}

export default Info;
