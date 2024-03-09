"use client"
import React from 'react';
import axios from 'axios';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PrismaClient } from '@prisma/client';
import prisma from '@/lib/prisma';
import { createInvestment, fetchInvestments } from '../store/investment';
//const prisma = new PrismaClient();

interface IFormInput {
  name: string;
  month: string;
  amount: number;
}

const defaultValues: IFormInput = {
  name: '',
  month: '',
  amount: 0
}

export default function Page() {
  const schema = yup.object().shape({
    name:yup.string().required("Name field is required!"),
    month:yup.string().required(),
    amount: yup.number().positive().integer().min(10).required(),

    // date: yup.number().positive().integer().min(1).required()
    })
   const [data, setData] = useState("") 
  const [show, setShow] = useState(false);

  const {
    reset,
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  
  const onSubmit = (data: any) => {

    createInvestment(data).then((res)=>{
      if(res?.data.success){
        reset()
      }
    })

  }
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  fetchInvestments()
  return (
    <div>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4 py-5 my-4 pe-5">
          <Button variant="primary" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg> Add New Investment
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Name of Investment</label>
                  <input {...register("name", { required: true, maxLength: 20 })} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
   <p className='fs-6 text-danger'>{errors.name?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Month</label>
                  <input {...register("month", { required: true, maxLength: 20 })} type="text" className="form-control" id="exampleInputMonth" aria-describedby="emailHelp"/>
   <p className='fs-6 text-danger'>{errors.name?.message}</p>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="exampleInputDate1" className="form-label">Date</label>
                  <input {...register("date")} type="date" className="form-control" id="exampleDate1"/>
                  <p className='fs-6 text-danger'>{errors.date?.message}</p>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputAmount" className="form-label">Amount</label>
                  <input {...register("amount", { min: 18, max: 99 })} type="number" className="form-control" id="exampleInputAmount"/>
                  <p className='fs-6 text-danger'>{errors.amount?.message}</p>
                </div>
                <input type='submit'/>
              </form>
              <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
            </Modal.Body>
            
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
              <th scope="row"></th>
              {/* <td>{data.name}</td>
              <td>{data.data}</td>
              <td>{data.amount}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}