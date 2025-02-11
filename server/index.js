import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors())
app.use(express.json());

app.use('/test', (req, res) => {
    res.json({ message: 'Hello from the server!' });
})

// For local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
