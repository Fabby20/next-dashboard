// import { Request, Response } from "express";
import prisma from "@/lib/prisma";
import {NextResponse} from 'next/server';


 export  async function GET(req:Request, res:Response) {
      const Investment = await prisma.invest.findMany();

      return NextResponse.json({message: 'Ok', status: 200, data: Investment, success: true})
      
  }

  export  async function POST(req:Request, res:Response) {
    const body = await req.json()
    const newInvestment = await prisma.invest.create({
      data: body
    });

    if(!newInvestment){
      return NextResponse.json({message: 'Failed to create investment', status: 400, })

    }

    return NextResponse.json({message: 'Ok', status: 200, data: newInvestment, success: true})

    
}
