import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import CreditCard from '../../../../components/CreditCard/CreditCard';
import useFetch from '../../../../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useDelete from '../../../../hooks/useDelete';

const EditCreditCardScreen = () => {
    const { id } = useParams();
    const url = `https://localhost:7042/api/CreditCard/${id}`;
    const creditCard = useFetch(url);
    const authToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {deleteData} = useDelete();

    useEffect(() => {
      if(!authToken){
        navigate("/signin");
      }
    })
   
    const deleteCreditCard = () => {
      deleteData(url, () => {
        navigate('/profile/paymentmethods');
      });
    };

  if(creditCard.isLoading){
    return <p>Loading</p>;
  }
  return (
    <>
        {<CreditCard creditCard={creditCard.data.content}/>}
        <div className='d-flex justify-content-center'>
          <Button variant="danger" onClick={handleShow}>
           Delete Creditcard
        </Button>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your creditcard?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button variant="success" onClick={deleteCreditCard}>
            I am sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditCreditCardScreen;
