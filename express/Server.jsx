// server.js
import express, { json } from 'express';
import { PrismaClient } from '@prisma/client';
require('dotenv').config(); // Load environment variables from .env file
const prisma = new PrismaClient();

const app = express();
app.use(json());

app.post('/createModel', async (req, res) => {
  const { id , name,  month,amount} = req.body;
  try {
    const createdModel = await prisma.model.create({
      data: {
        id,
        name,
        month,
        amount
      },
    });
    res.json(createdModel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5432; // Use port from environment variable or default to 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
