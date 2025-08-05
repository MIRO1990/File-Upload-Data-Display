import { Router } from 'express';
import { database } from '../../database/Database.js';

const router = Router();

router.get('/', (_req, res) => {
  const companies = database.getCompanyIds();
  res.status(200).json(companies);
});

export default router;
