import axios from "axios";
  export const fetchInvestments =  async () => {
    try {
      const res = await axios.get("/api/investments")
      console.log(res, "res")
      return res
    } catch (error) {
      console.log(error, "error")
    }
 }

 export const createInvestment = async (data: {name: string, month: string, amount: number})=> {
  try {
    const res = await axios.post("/api/investments", data)
      console.log(res, "res")
      return res
  } catch (error) {
    console.log(error, "error")
  }
 }