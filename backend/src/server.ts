import express from 'express';
import { routes } from './shared/http/routes';
import './shared/infra/typeorm/database';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(routes)

app.listen((PORT), () => {
    console.log('🐺 server is running at port 3333');
    
})
