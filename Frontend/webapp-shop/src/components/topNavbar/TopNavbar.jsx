import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SlLocationPin } from 'react-icons/sl';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import './_topNavbar.scss';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='button-container'>
        <Button variant='primary' onClick={handleShow} className='button'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body className='offcanvas-body'>
          <h3>Contact us</h3>
          <div className='contact-icons'>
            <div className='contactinfo'>
              <SlLocationPin className='icon' />
              <p>26 Division ST, New York, NY 100002, USA</p>
            </div>

            <div className='contactinfo'>
              <AiOutlineMail className='icon' />
              <p>manerosale@mail.com</p>
              <p>manerosupport@mail.com</p>
            </div>

            <div className='contactinfo'>
              <AiOutlinePhone className='icon' />
              <p>+17 123456789</p>
              <p>+17 987654321</p>
            </div>
          </div>

          <div className='order-tracker'>
            <p>Track your order</p>
            <div className='input-container'>
              <input type='text' placeholder='Order ID' />
              <button type='submit'>
                <div className='container-arrow'>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
