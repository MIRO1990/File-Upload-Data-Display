import express from 'express';
import assetRoutes from './routes/assets/assetsRoutes.js';
import companyRoutes from './routes/companies/companyRoutes.js';
import healthRoutes from './routes/health/healthRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/companies', companyRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
