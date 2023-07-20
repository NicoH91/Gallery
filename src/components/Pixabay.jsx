import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const Card = styled.div`
  width: 18rem; 
  height: 31rem; 
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 576px) {
    margin: 1rem auto;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 15rem;
  }
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
  color: red;
  
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

  animation: ${scaleIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) both;
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


export const Pixabay = ({ url, imageTag, views, downloads, likes, user, camera }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <>
      <Container>
        <Card className="card" onClick={handleImageClick}>
          <CardImage src={url} className="card-img-top" alt="" />
          <CardBody className="card-body">
            <CardText className="card-text">{imageTag}</CardText>

            <div className="card-info">
              <p><i className="bi bi-eye"></i> {views}</p>
              <p><i className="bi bi-arrow-down"></i> {downloads}</p>
              <p><i className="bi bi-hand-thumbs-up-fill"></i> {likes}</p>
              <p><i className="bi bi-person-check-fill"></i> {user}</p>
              <p><i className="bi bi-camera"></i>  {camera}</p>
            </div>



          </CardBody>
        </Card>
      </Container>

      {showModal && (
        <ModalContainer ref={modalRef} onClick={handleModalClick}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <ModalImage src={url} alt="" className="large-image" />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};