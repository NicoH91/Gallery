import React from 'react';

import styled from 'styled-components';


const Card = styled.div`
  width: 18rem;
  height: 23rem;
  padding:1rem;
  margin:1rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  

`;





export const Pixabay = ({ url, imageKey, imageTag }) => {
    return (
      <Card className="card">
        <CardImage src={url} className="card-img-top" alt="" />
        <CardBody className="card-body">
          <CardTitle className="{card-title}"></CardTitle>
          <CardText className="card-text">{imageTag}</CardText>
          
          <a href="#" className="btn btn-success">
            
          <i className="bi bi-info"></i>
          </a>
        </CardBody>
      </Card>
    );
  };
  
  
  
  
  // export const Pixabay = ({ url, imageKey, imageTag }) => {
//     return (

//         <div className='contenedor'>
//             <img className='img' src={url} key={imageKey} alt="" />
//             <p>{imageTag} </p>
//         </div>


//     );
    
// };

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
