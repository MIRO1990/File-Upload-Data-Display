import { Router } from 'express';
import multer from 'multer';
import { parse } from 'csv-parse/sync';
import { database } from '../../database/Database.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('assetFile'), (req, res) => {
  const companyId = req.body.companyId;
  const file = req.file;

  if (!companyId || !file) {
    return res.status(400).json({ error: 'companyId and assetFile are required' });
  }

  try {
    let parsedAssets;

    if (file.mimetype === 'application/json') {
      parsedAssets = JSON.parse(file.buffer.toString());
    } else if (file.mimetype === 'text/csv') {
      parsedAssets = parse(file.buffer.toString(), {
        columns: true,
        skip_empty_lines: true,
      });
    } else {
      return res.status(400).json({ error: 'Unsupported file format. Use JSON or CSV.' });
    }

    for (const asset of parsedAssets) {
      if (!asset.address || !asset.latitude || !asset.longitude) {
        return res
          .status(400)
          .json({ error: 'Each asset must have address, latitude, and longitude' });
      }

      database.addAssets(companyId, asset);
    }

    res.status(200).json({ message: `Uploaded ${parsedAssets.length} assets.` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to parse or process file.' });
  }
});

router.get('/', (req, res) => {
  const companyId = req.query.companyId as string | undefined;

  const assets = database.getAssets(companyId);
  res.status(200).json(assets);
});

export default router;
