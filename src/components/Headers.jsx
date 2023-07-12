import React from 'react'
import styled from 'styled-components';
const H1 = styled.h1 `
font-size: 4.5rem;
font-weight: 500;
background-image: conic-gradient(#553c9a, #ee4b2b, #00c2cb);
color: transparent;
background-clip: text;
-webkit-background-clip: text;
text-align:center;
margin-bottom:2rem;
`

export const Headers = () => {
    return (
        <div>
            
                <H1>Pixabay Gallery</H1>
            
        </div>
    )
}


