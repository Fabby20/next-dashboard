import { Request, Response } from "express";
import prisma from "@/lib/prisma";

export async function GET(req:Request, res: Response){
  const result = await prisma.invest.findMany()

  return res.json({message: 'ok', status: 200, data: result})
}
export default async function handler(req:Request, res:Response) {
  console.log(req.method, "req.method")
    // READ ALL DATA
    if (req.method === 'GET') {
      const Investment = await prisma.invest.findMany();
      res.json(Investment);
    } 
    // CREATE DATA
    else if (req.method === 'POST') {
      const { name, amount, month } = req.body;
      
      const newinvest = await prisma.invest.create({
        data: {
          name,
          amount,
          month
        },
      });
  
      res.json(newinvest);
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }