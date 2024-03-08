import axios from "axios";
  export const fetchInvestments =  async () => {
    try {
      const res = await axios.get("/api/invest")
      console.log(res, "res")
      return res
    } catch (error) {
      console.log(error, "error")
    }
 }