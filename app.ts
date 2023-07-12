import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Set the views directory and view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.render('splash.pug');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
