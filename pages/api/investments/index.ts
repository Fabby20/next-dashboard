import { Request, Response } from "express";
import prisma from "@/lib/prisma";

// export async function GET(req:Request, res: Response){
//   const result = await prisma.invest.findMany()

//   return res.json({message: 'ok', status: 200, data: result})
// }

 const getAllInvestmenst = async  (req:Request, res:Response)=> {
  console.log(req.method, "req.method")
    // READ ALL DATA
    // if (req.method === 'GET') {
        
      const Investment = await prisma.invest.findMany();
      res.json(Investment);
    // } 
 
  }

  export const InvestmentsController = {
    getAllInvestmenst,
  };