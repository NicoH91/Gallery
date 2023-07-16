import React, { useState } from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 18rem;
  height: 23rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 11rem;
  object-fit: cover;
  align-self: center;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
`;

const CardText = styled.p`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  background-color: #fff;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 0; 
  display: block;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Pixabay = ({ url, imageKey, imageTag }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="card" onClick={handleImageClick}>
        <CardImage src={url} className="card-img-top" alt="" />
        <CardBody className="card-body">
          <CardTitle className="{card-title}"></CardTitle>
          <CardText className="card-text">{imageTag}</CardText>
          <a href="#" className="btn btn-success">
            <i className="bi bi-info"></i>
          </a>
        </CardBody>
      </Card>

      {showModal && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <ModalImage src={url} alt="" className="large-image" />
          </ModalContent>
        </ModalContainer>
      )}
    </>
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
