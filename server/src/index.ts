import express from 'express';
import userRoutes from './routes/userRoutes';
import noteRoutes from './routes/noteRoutes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(noteRoutes);

const server = app.listen(4000, () =>
  console.log(`
🚀 Server ready at: http://localhost:4000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
