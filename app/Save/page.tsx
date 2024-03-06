"use client"
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const page = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
       <div className="row">
        <div className="col-8"></div>
        <div className="col-4 py-5 my-4 pe-5">
        <Button variant="primary" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>  Add New Investment
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name of Investment</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputDate1" className="form-label">Date</label>
    <input type="" className="form-control" id="exampleDate1"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputDate1" className="form-label">Amount</label>
    <input type="password" className="form-control" id="exampleInputDate1"/>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>  
      
        </div>
       </div>
       <div className="container-fluid">
       <table className="table">
  <thead>
    <tr>
      <th scope="col">no</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>BTC</td>
      <td>4 Jan 2023</td>
      <td>$300</td>
    </tr>
  </tbody>
</table>
       </div>
    </div>
  )
}

export default page
